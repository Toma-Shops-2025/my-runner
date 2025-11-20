# Google Workspace Setup - Step by Step Guide

## Step 1: Sign Up for Google Workspace

### 1.1 Visit Google Workspace
1. **Open your browser** and go to: https://workspace.google.com/
2. **Click "Get Started"** or "Start Free Trial"
3. **You'll see a form** asking for your business information

### 1.2 Fill Out the Sign-Up Form
**Business Information:**
- **Business Name**: MY-RUNNER.COM
- **Number of Employees**: 1-10 (start small)
- **Country/Region**: United States
- **Phone Number**: 502-812-2456

**Admin Account Information:**
- **First Name**: Toma
- **Last Name**: Adkins
- **Email**: infomypartsrunner@gmail.com (your current email - used for account recovery)
- **Password**: Create a strong password (write it down!)

### 1.3 Choose Your Plan
**Select**: Business Starter
- **Cost**: $6/month per user
- **Features**: Professional email, Google Drive, Calendar
- **Storage**: 30GB per user
- **Perfect for**: Small businesses like MY-RUNNER.COM
- **Free Trial**: Usually 14 days (verify on signup page)

### 1.4 Complete Sign-Up
1. **Click "Next"** after filling out the form
2. **Review your information** and click "Agree and Continue"
3. **You'll be taken to the Google Workspace admin console**
4. **Note**: You'll need to verify your domain (my-runner.com) before creating email accounts

---

## Step 2: Verify Your Domain (my-runner.com)

### 2.1 Access Domain Verification
1. **In the Google Workspace admin console**, look for "Verify domain ownership"
2. **You'll see**: "my-runner.com" needs verification
3. **Click "Verify"** next to my-runner.com
4. **You'll see verification options**

### 2.2 Choose Verification Method
**Recommended: HTML file upload** (fastest, if you have website access)
1. **Download the HTML file** that Google provides (e.g., `google1234567890.html`)
2. **Upload it to your website root**:
   - If using Netlify: Upload to `/public/` folder
   - The file should be accessible at: `https://my-runner.com/google1234567890.html`
3. **Click "Verify"** in Google Workspace
4. **Verification happens immediately** (usually within minutes)

**Alternative: DNS TXT record** (if you don't have website file access)
1. **Copy the TXT record** that Google provides (looks like: `google-site-verification=xxxxx`)
2. **Add it to your domain's DNS settings**:
   - Go to your domain registrar (where you bought my-runner.com)
   - Find DNS management or DNS settings
   - Add a TXT record:
     - **Host/Name**: `@` or `my-runner.com`
     - **Type**: `TXT`
     - **Value**: The verification string Google provided
     - **TTL**: 3600 (or default)
3. **Click "Verify"** in Google Workspace
4. **Wait 24-48 hours** for DNS propagation

### 2.3 Wait for Verification
- **HTML file method**: Usually instant (5-30 minutes)
- **DNS TXT record method**: 24-48 hours for DNS propagation
- **Check**: Google will email you when verified
- **Status**: You'll see "Verified" in the admin console
- **After verification**: You can proceed to create email accounts

---

## Step 3: Create Your Business Email Addresses

### 3.1 Access User Management
1. **In Google Workspace admin console**, click **"Users"** in the left sidebar
2. **Click "Add User"** or the **"+"** button
3. **You'll see a form to create new users**

### 3.2 Create Your Primary Email: toma@my-runner.com
**This is your main business email:**
- **First Name**: Toma
- **Last Name**: Adkins
- **Primary Email**: toma@my-runner.com
- **Password**: Create a strong password (write it down!)
  - **Requirements**: At least 8 characters, mix of letters, numbers, and symbols
  - **Example format**: `MyRunner2024!Secure`
- **Optional**: Add a recovery phone number
- **Click "Add User"** or "Next"

**After creating the account:**
- Google will show you the email address: `toma@my-runner.com`
- **Save your password** somewhere secure!
- You can now access email at: https://mail.google.com

### 3.3 Create Additional Business Emails (Optional)
**You can create these email addresses later if needed:**

1. **support@my-runner.com**
   - **First Name**: Support
   - **Last Name**: Team
   - **Email**: support@my-runner.com
   - **Password**: Create a strong password

2. **info@my-runner.com**
   - **First Name**: Info
   - **Last Name**: Team
   - **Email**: info@my-runner.com
   - **Password**: Create a strong password

3. **drivers@my-runner.com**
   - **First Name**: Driver
   - **Last Name**: Support
   - **Email**: drivers@my-runner.com
   - **Password**: Create a strong password

**Note**: Each additional email costs $6/month. Start with just `toma@my-runner.com` if you want to keep costs down initially.

---

## Step 4: Configure Email Settings

### 4.1 Access Your Email
**First, let's make sure you can access toma@my-runner.com:**
1. **Go to**: https://mail.google.com
2. **Sign in** with:
   - **Email**: toma@my-runner.com
   - **Password**: The password you created during setup
3. **You should now see your inbox!** 🎉

### 4.2 Set Up Email Forwarding (Optional)
**If you want emails forwarded to your personal Gmail:**
1. **In Gmail** (signed in as toma@my-runner.com):
   - Click the gear icon (⚙️) → "See all settings"
   - Go to "Forwarding and POP/IMAP"
   - Click "Add a forwarding address"
   - Enter: infomypartsrunner@gmail.com (or your personal email)
   - Click "Next" → "Proceed" → "OK"
   - Check your personal email for verification code
   - Enter the code in Gmail settings
   - Select "Forward a copy of incoming mail to" → Choose your personal email
   - Select "Keep Gmail's copy in the Inbox" (so you have emails in both places)
   - Click "Save Changes"

### 4.3 Create Professional Email Signatures
**For toma@my-runner.com:**
1. **In Gmail** (signed in as toma@my-runner.com):
   - Click the gear icon (⚙️) → "See all settings"
   - Scroll down to "Signature"
   - Click "Create new" and name it "Business Signature"
   - Add this signature:
```
Best regards,
Toma Adkins
MY-RUNNER.COM
Phone: 502-812-2456
Email: toma@my-runner.com
Website: www.my-runner.com
Address: 5120 Cynthia Drive, 40291, JeffersonTown, KY
```
   - Select "Insert signature" dropdown → Choose "Business Signature" for new emails
   - Click "Save Changes" at the bottom

### 4.3 Set Up Auto-Responders
1. **In Gmail**, go to Settings → "See all settings"
2. **Click "Vacation responder"**
3. **Set up automatic replies** for each email address

---

## Step 5: Test Your Email System

### 5.1 Send Test Emails
1. **From your personal email** (infomypartsrunner@gmail.com), send a test email to:
   - **toma@my-runner.com**
   
2. **Check toma@my-runner.com inbox**:
   - Go to https://mail.google.com
   - Sign in with toma@my-runner.com
   - You should see the test email!
   - Check spam folder if it's not in inbox

### 5.2 Test Email Forwarding (If Set Up)
1. **Send an email to toma@my-runner.com** from your personal email
2. **Check your personal email** (if forwarding is enabled, you should also receive it there)
3. **Reply to test** that sending emails works:
   - Click "Compose" in Gmail
   - Send an email to your personal Gmail
   - Check that it's received

---

## Step 6: Update Your Website

### 6.1 Update Contact Information (Optional)
**If you want to update your website with the new email:**
- **ContactPage.tsx**: Update support email to toma@my-runner.com (or keep existing)
- **All documentation**: Update email references if needed
- **Note**: You can keep using your existing support email addresses, just make sure toma@my-runner.com works for receiving emails

---

## Step 7: Set Up Mobile Access

### 7.1 Download Gmail App
1. **Download Gmail app** on your phone (if not already installed)
2. **Add your business email**:
   - Open Gmail app
   - Tap your profile picture (top right)
   - Tap "Add another account"
   - Select "Google"
   - Enter: **toma@my-runner.com**
   - Enter your password
3. **Set up notifications**:
   - Go to Gmail app settings
   - Tap "Notifications"
   - Enable notifications for toma@my-runner.com

### 7.2 Test Mobile Email
1. **Send a test email** from your phone using toma@my-runner.com
2. **Check that you receive emails** on your phone
3. **Verify email signature** appears when sending emails

---

## Step 8: Set Up Email Management

### 8.1 Create Email Labels
**In Gmail, create these labels:**
- **Customer Support**: For support emails
- **Driver Support**: For driver emails
- **Business Inquiries**: For business emails
- **Technical Issues**: For tech emails
- **Urgent**: For urgent emails

### 8.2 Set Up Email Filters
1. **In Gmail**, go to Settings → "Filters and Blocked Addresses"
2. **Create filters** to automatically organize emails
3. **Set up forwarding rules** for different email types

---

## Step 9: Security and Backup

### 9.1 Enable Two-Factor Authentication
1. **In Google Workspace admin console**, go to "Security"
2. **Enable 2FA** for all user accounts
3. **Set up backup codes** for account recovery

### 9.2 Set Up Email Backup
1. **Enable Google Drive backup** for important emails
2. **Set up regular backups** of email data
3. **Test backup and recovery** procedures

---

## Step 10: Go Live

### 10.1 Final Testing
1. **Send test emails** to all business addresses
2. **Test email forwarding** and auto-responders
3. **Verify mobile access** works correctly
4. **Check website contact forms** work with new emails

### 10.2 Update All References
1. **Update website** with new email addresses
2. **Update documentation** with new emails
3. **Update business cards** and marketing materials
4. **Notify customers** of new email addresses

---

## Troubleshooting Common Issues

### Domain Verification Issues
**Problem**: Domain (my-runner.com) not verifying
**Solutions**:
1. **Check DNS settings**: Make sure TXT record was added correctly
2. **Wait longer**: DNS can take 24-48 hours to propagate
3. **Try HTML file method**: Upload the verification file to your website
4. **Check domain registrar**: Make sure you have access to DNS settings
5. **Contact support**: Google Workspace support can help verify

### Can't Sign In to toma@my-runner.com
**Problem**: Can't access your email account
**Solutions**:
1. **Verify password**: Make sure you're using the correct password
2. **Password reset**: Go to https://accounts.google.com/signin/recovery
3. **Check account status**: Go to admin.google.com → Users → Check if account is active
4. **Try different browser**: Sometimes browser cache causes issues
5. **Contact admin**: If you have an admin account, they can reset your password

### Email Not Receiving
**Problem**: Not receiving emails at toma@my-runner.com
**Solutions**:
1. **Check spam folder**: Emails might be filtered as spam
2. **Verify domain MX records**: Make sure DNS is configured correctly (Google will guide you)
3. **Check forwarding**: If forwarding is set up, check destination email
4. **Test with different sender**: Try sending from different email addresses
5. **Wait 24 hours**: Sometimes DNS changes take time to propagate

### Mobile Access Issues
**Problem**: Can't access emails on phone
**Solutions**:
1. **Check app permissions**: Make sure Gmail app has necessary permissions
2. **Reinstall Gmail app**: Delete and reinstall the app
3. **Check account**: Verify you're signing in with toma@my-runner.com (not .com without hyphen)
4. **Use web browser**: Try accessing mail.google.com in your phone's browser
5. **Check internet**: Make sure you have a good internet connection

---

## Cost Summary

### Monthly Costs
- **Google Workspace Business Starter**: $6/month
- **Domain hosting**: $0 (if already owned)
- **Total monthly cost**: $6

### One-Time Costs
- **Setup time**: 2-3 hours
- **Domain verification**: Free
- **Email configuration**: Free
- **Total setup cost**: $0

---

## Success Checklist

### ✅ Completed Tasks
- [ ] Signed up for Google Workspace
- [ ] Verified domain ownership
- [ ] Created business email addresses
- [ ] Set up email forwarding
- [ ] Created professional signatures
- [ ] Tested email system
- [ ] Updated website with new emails
- [ ] Set up mobile access
- [ ] Configured email management
- [ ] Enabled security features

### ✅ Email Address Created
- [ ] toma@my-runner.com (Your primary business email)

### ✅ Optional Email Addresses (Can Create Later)
- [ ] support@my-runner.com (if needed)
- [ ] info@my-runner.com (if needed)
- [ ] drivers@my-runner.com (if needed)

---

## Quick Start Checklist

**Follow these steps in order:**

1. ✅ **Sign up for Google Workspace**
   - Go to https://workspace.google.com/
   - Choose Business Starter plan ($6/month)
   - Use domain: **my-runner.com**

2. ✅ **Verify your domain**
   - Use HTML file method (fastest) or DNS TXT record
   - Wait for verification (can take up to 48 hours)

3. ✅ **Create toma@my-runner.com**
   - Go to admin.google.com → Users → Add User
   - Create email: toma@my-runner.com
   - Set a strong password

4. ✅ **Access your email**
   - Go to https://mail.google.com
   - Sign in with toma@my-runner.com
   - You're done! 🎉

5. ✅ **Set up mobile access** (Optional)
   - Download Gmail app
   - Add toma@my-runner.com account

6. ✅ **Create email signature** (Optional)
   - Gmail Settings → Signature
   - Add professional signature

---

**Congratulations! You now have professional business emails for MY-RUNNER.COM!** 🎉

**Next Steps:**
1. **Start using toma@my-runner.com** for business communications
2. **Set up email forwarding** if you want emails in your personal inbox too
3. **Configure mobile app** for easy access on the go
4. **Create professional email signature** for all outgoing emails
5. **Update business cards/website** with your new email address

**Need help with any step? Let me know and I'll guide you through it!** 📧✨
