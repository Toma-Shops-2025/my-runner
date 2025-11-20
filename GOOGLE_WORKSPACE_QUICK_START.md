# Google Workspace Quick Start Guide - Set Up toma@my-runner.com

## Step 1: Sign Up (5 minutes)

1. **Go to**: https://workspace.google.com/
2. **Click**: "Get Started" or "Start Free Trial"
3. **Fill out the form**:
   - **Business Name**: MY-RUNNER.COM
   - **Number of Employees**: 1-10
   - **Country**: United States
   - **Phone**: 502-812-2456
   - **Your Name**: Toma Adkins
   - **Recovery Email**: infomypartsrunner@gmail.com (for account recovery)
   - **Password**: Create a strong password (write it down!)
4. **Choose Plan**: Business Starter ($6/month)
5. **Click**: "Next" → "Agree and Continue"

---

## Step 2: Add Your Domain (2 minutes)

1. **Enter your domain**: `my-runner.com`
2. **Click**: "Next"
3. **You'll be asked to verify domain ownership** (this is next step)

---

## Step 3: Verify Domain Ownership (10-30 minutes)

**Option A: HTML File Upload (FASTEST - Recommended)**
1. **Google will provide** an HTML file (e.g., `google1234567890.html`)
2. **Download the file**
3. **Upload to your website**:
   - If using Netlify: Upload to `/public/` folder
   - File should be accessible at: `https://my-runner.com/google1234567890.html`
4. **Go back to Google Workspace** and click "Verify"
5. **Done!** (Usually works within minutes)

**Option B: DNS TXT Record (If you can't upload files)**
1. **Google will provide** a TXT record to add
2. **Go to your domain registrar** (where you bought my-runner.com)
3. **Find DNS settings** or "DNS Management"
4. **Add TXT record**:
   - **Host/Name**: `@` or leave blank
   - **Type**: `TXT`
   - **Value**: The verification string from Google
5. **Save** and go back to Google Workspace
6. **Click "Verify"**
7. **Wait 24-48 hours** for DNS to propagate

**Note**: You'll know it's verified when you see "Domain verified" in the admin console.

---

## Step 4: Create toma@my-runner.com (3 minutes)

1. **In Google Workspace admin console**, click **"Users"** (left sidebar)
2. **Click "Add User"** or the **"+"** button
3. **Fill out the form**:
   - **First Name**: Toma
   - **Last Name**: Adkins
   - **Primary Email**: `toma@my-runner.com`
   - **Password**: Create a strong password (write it down!)
     - Example: `MyRunner2024!Secure`
     - Must be at least 8 characters
   - **Optional**: Add recovery phone number
4. **Click "Add User"** or "Next"
5. **Save your password** somewhere secure!

---

## Step 5: Access Your Email (1 minute)

1. **Go to**: https://mail.google.com
2. **Sign in** with:
   - **Email**: toma@my-runner.com
   - **Password**: The password you just created
3. **You should see your inbox!** 🎉

---

## Step 6: Set Up Mobile (Optional - 5 minutes)

1. **Download Gmail app** on your phone (if not already installed)
2. **Open Gmail app**
3. **Tap your profile picture** (top right)
4. **Tap "Add another account"**
5. **Select "Google"**
6. **Enter**: toma@my-runner.com
7. **Enter your password**
8. **Done!** You'll now receive email notifications on your phone

---

## Step 7: Create Email Signature (Optional - 5 minutes)

1. **In Gmail** (signed in as toma@my-runner.com):
   - Click the **gear icon (⚙️)** → **"See all settings"**
   - Scroll down to **"Signature"**
   - Click **"Create new"** and name it "Business Signature"
   - Copy and paste this:

```
Best regards,
Toma Adkins
MY-RUNNER.COM
Phone: 502-812-2456
Email: toma@my-runner.com
Website: www.my-runner.com
Address: 5120 Cynthia Drive, 40291, JeffersonTown, KY
```

2. **Select**: "Insert signature" dropdown → Choose "Business Signature" for new emails
3. **Click "Save Changes"** at the bottom

---

## Step 8: Set Up Email Forwarding (Optional - 3 minutes)

**If you want emails to also go to your personal Gmail:**

1. **In Gmail** (signed in as toma@my-runner.com):
   - Click **gear icon (⚙️)** → **"See all settings"**
   - Go to **"Forwarding and POP/IMAP"** tab
   - Click **"Add a forwarding address"**
   - Enter: `infomypartsrunner@gmail.com` (or your personal email)
   - Click **"Next"** → **"Proceed"** → **"OK"**
2. **Check your personal email** for a verification code
3. **Enter the code** in Gmail settings
4. **Select**: "Forward a copy of incoming mail to" → Choose your personal email
5. **Select**: "Keep Gmail's copy in the Inbox" (recommended)
6. **Click "Save Changes"**

Now emails sent to toma@my-runner.com will also appear in your personal Gmail!

---

## Troubleshooting

### Domain Not Verifying?
- **Wait longer**: DNS can take 24-48 hours
- **Check DNS settings**: Make sure TXT record was added correctly
- **Try HTML file method**: Usually faster than DNS

### Can't Sign In?
- **Check password**: Make sure you're using the correct password
- **Try password reset**: https://accounts.google.com/signin/recovery
- **Check account status**: Go to admin.google.com → Users → Check if account is active

### Not Receiving Emails?
- **Check spam folder**: Emails might be filtered
- **Verify MX records**: Google will guide you through this during setup
- **Wait 24 hours**: DNS changes take time to propagate

### Need Help?
- **Google Workspace Support**: https://support.google.com/a
- **Admin Console**: https://admin.google.com

---

## What You've Accomplished

✅ Professional business email: toma@my-runner.com  
✅ Gmail access on web and mobile  
✅ Professional email signature  
✅ Email forwarding (optional)  
✅ Ready for business communications!  

**Total Cost**: $6/month  
**Setup Time**: 30-60 minutes  

---

## Quick Links

- **Access Email**: https://mail.google.com
- **Admin Console**: https://admin.google.com
- **Google Workspace Help**: https://support.google.com/a

**Congratulations! You're all set up!** 🎉📧

