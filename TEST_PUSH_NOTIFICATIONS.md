# Step-by-Step Push Notification Debugging Guide

This guide will help us pinpoint exactly where the push notification flow is failing.

---

## 🔍 **Step-by-Step Debugging Process**

### **STEP 1: Initial Setup Check** ✅

**What to do:**
1. Open the Driver Dashboard (`/driver-dashboard`)
2. Open the browser console (F12 → Console tab)
3. Before clicking anything, copy/paste this in the console:

```javascript
// Step 1: Check basic support
console.log('=== STEP 1: BASIC SUPPORT CHECK ===');
console.log('Service Worker support:', 'serviceWorker' in navigator);
console.log('Push Manager support:', 'PushManager' in window);
console.log('Notification support:', typeof Notification !== 'undefined');
console.log('Current permission:', Notification.permission);
```

**What to send me:**
- Screenshot or copy of the console output

---

### **STEP 2: Service Worker Registration** ✅

**What to do:**
1. Still in the console, run this:

```javascript
// Step 2: Check service worker
console.log('=== STEP 2: SERVICE WORKER CHECK ===');
navigator.serviceWorker.getRegistrations().then(registrations => {
  console.log('Number of registrations:', registrations.length);
  registrations.forEach((reg, idx) => {
    console.log(`Registration ${idx + 1}:`, reg.scope);
    console.log(`  Active state:`, reg.active?.state);
  });
  
  return navigator.serviceWorker.ready;
}).then(registration => {
  console.log('Service worker ready:', !!registration);
  if (registration) {
    console.log('  Scope:', registration.scope);
    console.log('  Update found:', registration.updatefound);
  }
}).catch(err => {
  console.error('Service worker error:', err);
});
```

**What to send me:**
- Console output
- Also check the Network tab - is `/sw.js` loading successfully? (should be 200 status)

---

### **STEP 3: VAPID Key Check** ✅

**What to do:**
1. In the console, check if VAPID key is loaded:

```javascript
// Step 3: Check VAPID key (may not work in console, but let's try)
console.log('=== STEP 3: VAPID KEY CHECK ===');
// This won't work directly, but check the Network tab instead:
console.log('⚠️ Check Network tab for VITE_VAPID_PUBLIC_KEY');
console.log('   Look for any failed requests or environment variable loading');
```

2. **Check Network Tab:**
   - Go to Network tab in DevTools
   - Filter by "JS" or look for your main JS bundle
   - Check if `VITE_VAPID_PUBLIC_KEY` appears anywhere
   - Take a screenshot if you see it (but hide the actual key value)

**What to send me:**
- Any relevant Network tab info
- Any console errors about missing VAPID key

---

### **STEP 4: Click "Enable Push Alerts" Button** 🔔

**What to do:**
1. Clear the console (click the clear icon or Ctrl+L)
2. **Turn on console logging** - make sure "All levels" or "Verbose" is selected
3. **Click the "Enable Push Alerts" button**
4. **Copy ALL console output** (everything that appears)

**What to look for:**
- Any errors (red text)
- Any warnings (yellow text)
- Any log messages about subscriptions
- Network requests (check Network tab too)

**What to send me:**
- Complete console log output
- Screenshot of any browser permission dialog that appears
- What you clicked on the permission dialog (Allow/Block)

---

### **STEP 5: After Permission Grant** ✅

**What to do:**
1. After clicking "Allow" (if a dialog appeared), wait a few seconds
2. Run this in the console:

```javascript
// Step 5: Check subscription status
console.log('=== STEP 5: SUBSCRIPTION STATUS ===');
console.log('Permission:', Notification.permission);

navigator.serviceWorker.ready.then(async registration => {
  const subscription = await registration.pushManager.getSubscription();
  console.log('Has subscription:', !!subscription);
  
  if (subscription) {
    console.log('✅ Subscription found!');
    const subJson = subscription.toJSON();
    console.log('Endpoint:', subJson.endpoint);
    console.log('Keys present:', !!subJson.keys);
    console.log('Full subscription:', subJson);
  } else {
    console.log('❌ No subscription found');
  }
}).catch(err => {
  console.error('Error checking subscription:', err);
});
```

**What to send me:**
- Console output
- Screenshot of the banner showing "Permission granted, finalizing setup..."

---

### **STEP 6: Check Database** 🗄️

**What to do:**
1. Go to Supabase Dashboard
2. Navigate to Table Editor → `push_subscriptions`
3. Check if there's a new row with your driver's `user_id`

**What to look for:**
- Is there a row with your user ID?
- Does it have an `endpoint`?
- Does it have `keys` (should be a JSON object with `p256dh` and `auth`)?

**What to send me:**
- Screenshot of the `push_subscriptions` table (you can blur sensitive data)
- Or just tell me: "Yes, I see a row" or "No, no row found"

---

### **STEP 7: Test Sending a Notification** 📤

**What to do:**
1. Once subscription is saved, let's test sending a notification
2. In the console, run:

```javascript
// Step 7: Test send notification
console.log('=== STEP 7: TEST SEND NOTIFICATION ===');

// First, get your user ID (you'll need to replace this with your actual ID)
const userId = 'YOUR_DRIVER_USER_ID_HERE'; // Replace this!

fetch('/.netlify/functions/send-driver-push', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: userId,
    title: 'Test Notification',
    body: 'This is a test push notification!',
    data: { test: true }
  })
})
.then(response => response.json())
.then(data => {
  console.log('✅ Response:', data);
})
.catch(err => {
  console.error('❌ Error:', err);
});
```

**Alternative:** If you have the driver user ID, I can help you construct the request properly.

**What to send me:**
- Console output from the fetch
- Check Network tab for the `send-driver-push` request
  - Status code? (should be 200)
  - Response body?
  - Any errors?

---

### **STEP 8: Check Netlify Function Logs** 📋

**What to do:**
1. Go to Netlify Dashboard
2. Navigate to: **Functions** → **send-driver-push** → **Logs**
3. Look for recent logs (should show your test request)

**What to look for:**
- Any errors
- Does it say "No active subscriptions"?
- Does it say "Notifications processed"?
- Any warnings about VAPID keys?

**What to send me:**
- Screenshot or copy of the Netlify function logs

---

## 🎯 **Quick Diagnostic Script**

Copy/paste this ENTIRE script into the console to get a complete diagnostic:

```javascript
// Complete Push Notification Diagnostic
(async function() {
  console.log('🔍 PUSH NOTIFICATION DIAGNOSTIC REPORT\n');
  console.log('='.repeat(50));
  
  // 1. Basic Support
  const support = {
    serviceWorker: 'serviceWorker' in navigator,
    pushManager: 'PushManager' in window,
    notification: typeof Notification !== 'undefined'
  };
  console.log('\n1️⃣ BASIC SUPPORT:');
  console.table(support);
  
  // 2. Permission
  console.log('\n2️⃣ PERMISSION:');
  console.log('   Status:', Notification.permission);
  
  // 3. Service Worker
  try {
    const registrations = await navigator.serviceWorker.getRegistrations();
    console.log('\n3️⃣ SERVICE WORKER:');
    console.log('   Registrations:', registrations.length);
    if (registrations.length > 0) {
      const reg = await navigator.serviceWorker.ready;
      console.log('   Scope:', reg.scope);
      console.log('   Active:', !!reg.active);
    }
  } catch (e) {
    console.error('   Error:', e);
  }
  
  // 4. Subscription
  try {
    const reg = await navigator.serviceWorker.ready;
    const subscription = await reg.pushManager.getSubscription();
    console.log('\n4️⃣ SUBSCRIPTION:');
    console.log('   Has subscription:', !!subscription);
    if (subscription) {
      const subJson = subscription.toJSON();
      console.log('   Endpoint:', subJson.endpoint?.substring(0, 50) + '...');
      console.log('   Has keys:', !!subJson.keys);
    }
  } catch (e) {
    console.error('   Error:', e);
  }
  
  // 5. VAPID Key (check env)
  console.log('\n5️⃣ VAPID KEY:');
  console.log('   ⚠️ Check Network tab or app code for VITE_VAPID_PUBLIC_KEY');
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Diagnostic complete! Copy this output and share it.');
})();
```

---

## 📝 **What to Send Me After Each Step**

For each step, please send:
1. **Console output** (copy/paste or screenshot)
2. **Any errors** you see (red text)
3. **Network tab** screenshots if relevant
4. **What action you took** (e.g., "Clicked Enable button", "Clicked Allow")

---

## 🚨 **Common Issues to Watch For**

| Issue | What It Means | What to Check |
|-------|---------------|---------------|
| "Push notifications are not supported" | Browser doesn't support push | Use Chrome/Edge/Firefox |
| "Missing VITE_VAPID_PUBLIC_KEY" | VAPID key not loaded | Check Netlify env vars |
| "Permission denied" | User blocked notifications | Browser settings |
| "Service worker not found" | `/sw.js` not loading | Network tab, check 404 |
| "No subscription found" | Subscription not created | Step 5 diagnostic |
| "No active subscriptions" (Netlify) | Not saved to database | Step 6 - check Supabase |

---

**Ready to start? Begin with STEP 1 and send me the console output!** 🚀
