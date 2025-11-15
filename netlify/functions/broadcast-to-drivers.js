import { createClient } from '@supabase/supabase-js';

const {
  SUPABASE_SERVICE_ROLE_KEY,
  VITE_SUPABASE_URL
} = process.env;

if (!SUPABASE_SERVICE_ROLE_KEY || !VITE_SUPABASE_URL) {
  console.warn('Missing Supabase environment variables for broadcast function.');
}

const supabase = createClient(VITE_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false
  }
});

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' })
    };
  }

  try {
    const { order } = JSON.parse(event.body || '{}');
    
    if (!order || !order.id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Order data is required' })
      };
    }

    console.log(`🤖 Broadcasting order ${order.id} to online drivers...`);

    // Get all active drivers
    const { data: allDriverProfiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, full_name, email, phone, is_online, status, user_type')
      .eq('user_type', 'driver')
      .eq('status', 'active');

    if (profilesError) {
      console.error('Error fetching drivers from profiles:', profilesError);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to fetch drivers', error: profilesError.message })
      };
    }

    if (!allDriverProfiles || allDriverProfiles.length === 0) {
      console.log('⚠️ No active drivers found');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'No active drivers found', driversNotified: 0 })
      };
    }

    console.log(`📋 Found ${allDriverProfiles.length} active driver profiles`);

    // Get online drivers - use 1 hour window
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const driverIds = allDriverProfiles.map(d => d.id);

    // Try primary query first (with last_seen check)
    const { data: availabilityData, error: availabilityError } = await supabase
      .from('driver_availability')
      .select('driver_id, last_seen, is_online')
      .in('driver_id', driverIds)
      .eq('is_online', true)
      .gte('last_seen', oneHourAgo);

    if (availabilityError) {
      console.error('Error fetching driver availability:', availabilityError);
    }

    let activeDriverIds = new Set((availabilityData || [])
      .filter((item) => item.is_online === true)
      .map((item) => item.driver_id));

    // Fallback: If no drivers found with recent last_seen, try just checking is_online
    if (activeDriverIds.size === 0) {
      console.log('⚠️ No drivers found with recent last_seen, trying fallback check...');
      const { data: onlineDriversData, error: onlineError } = await supabase
        .from('driver_availability')
        .select('driver_id, is_online')
        .in('driver_id', driverIds)
        .eq('is_online', true);

      if (!onlineError && onlineDriversData) {
        activeDriverIds = new Set(onlineDriversData.map((item) => item.driver_id));
        console.log(`✅ Found ${activeDriverIds.size} online drivers via fallback check`);
      }
    }

    const driversToNotify = allDriverProfiles.filter(driver => activeDriverIds.has(driver.id));

    if (driversToNotify.length === 0) {
      console.log(`⚠️ No online drivers available to notify for order ${order.id}`);
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'No online drivers found', driversNotified: 0 })
      };
    }

    console.log(`📢 Notifying ${driversToNotify.length} drivers for order ${order.id}`);

    // Notify each driver
    const notificationResults = [];
    for (const driver of driversToNotify) {
      try {
        const shortOrderId = String(order.id).slice(-8);
        const notificationTitle = 'New Order Available!';
        const notificationBody = `Order #${shortOrderId} - $${order.total}. Pickup: ${order.pickup_address}`;

        // Create in-app notification
        const { error: notifError } = await supabase
          .from('driver_notifications')
          .insert({
            driver_id: driver.id,
            type: 'in_app',
            title: notificationTitle,
            body: notificationBody,
            status: 'unread',
            data: {
              order_id: order.id,
              pickup_address: order.pickup_address,
              delivery_address: order.delivery_address,
              total: order.total
            }
          });

        if (notifError) {
          console.error(`Failed to create in-app notification for driver ${driver.id}:`, notifError);
        }

        // Send push notification via the send-driver-push function
        try {
          // Get the base URL from headers
          const protocol = event.headers['x-forwarded-proto'] || 'https';
          const host = event.headers.host || 'my-runner.com';
          const baseUrl = `${protocol}://${host}`;

          const pushResponse = await fetch(`${baseUrl}/.netlify/functions/send-driver-push`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              userId: driver.id,
              title: notificationTitle,
              body: notificationBody,
              data: {
                orderId: order.id,
                total: order.total,
                pickupAddress: order.pickup_address,
                deliveryAddress: order.delivery_address,
                type: 'available',
                url: '/driver-dashboard' // URL to navigate when notification is clicked
              }
            })
          });

          if (pushResponse.ok) {
            const result = await pushResponse.json();
            console.log(`✅ Push notification sent to driver ${driver.id}:`, result);
            notificationResults.push({ driverId: driver.id, success: true });
          } else {
            const errorText = await pushResponse.text();
            console.error(`⚠️ Push notification failed for driver ${driver.id}:`, pushResponse.status, errorText);
            notificationResults.push({ driverId: driver.id, success: false, error: errorText });
          }
        } catch (pushError) {
          console.error(`⚠️ Push notification error for driver ${driver.id}:`, pushError);
          notificationResults.push({ driverId: driver.id, success: false, error: pushError.message });
        }
      } catch (driverError) {
        console.error(`Error creating notifications for driver ${driver.id}:`, driverError);
        notificationResults.push({ driverId: driver.id, success: false, error: driverError.message });
      }
    }

    const successCount = notificationResults.filter(r => r.success).length;

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Driver notifications processed',
        driversNotified: successCount,
        totalDrivers: driversToNotify.length,
        results: notificationResults
      })
    };
  } catch (error) {
    console.error('Error broadcasting to drivers:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to broadcast to drivers', error: error.message })
    };
  }
};
