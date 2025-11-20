# Set Up Google Workspace for toma@my-runner.com - Step by Step

## ✅ My Recommendation: Google Workspace

**Why Google Workspace?**
- ✅ Seamless Gmail integration (works perfectly on phone & laptop)
- ✅ Professional setup ($6/month - reasonable for business)
- ✅ Reliable and secure
- ✅ Easy to add to Gmail app
- ✅ Works with your existing SendGrid setup for sending emails

---

## 🚀 Quick Start - Follow These Steps

### Step 1: Sign Up for Google Workspace (5 minutes)

1. **Go to**: https://workspace.google.com/
2. **Click**: "Get Started" or "Start Free Trial"
3. **Fill out the form**:
   - **Business Name**: MY-RUNNER.COM
   - **Number of Employees**: 1-10
   - **Country**: United States
   - **Phone**: 502-812-2456
   - **Your Name**: Toma Adkins
   - **Recovery Email**: infomypartsrunner@gmail.com
   - **Password**: Create a strong password (write it down!)
     - Example: `MyRunner2024!Secure`
4. **Choose Plan**: Business Starter ($6/user/month)
5. **Click**: "Next" → "Agree and Continue"

**You'll be taken to the Google Workspace admin console.**

---

### Step 2: Add Domain my-runner.com (2 minutes)

1. **Enter your domain**: `my-runner.com`
2. **Click**: "Next"
3. **Google will ask you to verify domain ownership** (next step)

---

### Step 3: Verify Domain Ownership (10-30 minutes)

**Option A: HTML File Upload (FASTEST - Recommended)**

1. **Google will provide** an HTML file (e.g., `google1234567890.html`)
2. **Download the file**
3. **Upload to your website**:
   - If your site is on Netlify: Upload to `/public/` folder in your project
   - The file should be accessible at: `https://my-runner.com/google1234567890.html`
4. **Go back to Google Workspace** and click "Verify"
5. **Done!** (Usually works within minutes)

**Option B: DNS TXT Record (If you can't upload files)**

1. **Google will provide** a TXT record to add
   - It will look like: `google-site-verification=xxxxx`
2. **Go to your domain registrar** (where you bought my-runner.com)
   - Examples: GoDaddy, Namecheap, Cloudflare, etc.
3. **Find DNS settings** or "DNS Management"
4. **Add TXT record**:
   - **Host/Name**: `@` or leave blank (some registrars require just `@`)
   - **Type**: `TXT`
   - **Value**: Copy the exact verification string from Google
   - **TTL**: 3600 (or default)
5. **Save** the DNS record
6. **Go back to Google Workspace** and click "Verify"
7. **Wait 24-48 hours** for DNS to propagate

**You'll know it's verified when you see "Domain verified ✅" in the admin console.**

---

### Step 4: Create toma@my-runner.com Email Account (3 minutes)

1. **In Google Workspace admin console**, click **"Users"** (left sidebar)
2. **Click "Add User"** or the **"+"** button
3. **Fill out the form**:
   - **First Name**: Toma
   - **Last Name**: Adkins
   - **Primary Email**: `toma@my-runner.com`
   - **Password**: Create a strong password (write it down!)
     - Example: `MyRunner2024!Secure`
     - Must be at least 8 characters
   - **Optional**: Add recovery phone number (recommended)
4. **Click "Add User"** or "Next"
5. **Save your password** somewhere secure!

**Important**: Google will show you the email address and password. **Write it down!**

---

### Step 5: Update MX Records (CRITICAL - 10 minutes)

**This is the most important step!** MX records tell the internet where to send emails for your domain.

**Current Situation**: Your MX records probably point to SendGrid (for sending only). You need to change them to point to Google Workspace (for receiving).

#### How to Update MX Records:

1. **Go to your domain registrar** (where you manage DNS for my-runner.com)
   - This is where you bought the domain
   - Common registrars: GoDaddy, Namecheap, Cloudflare, Google Domains

2. **Find DNS settings** or "DNS Management" or "DNS Records"

3. **Find existing MX records** and note them (you might have SendGrid records)

4. **Delete or update MX records** - Remove any SendGrid MX records

5. **Add Google Workspace MX records**:
   
   Add these 5 MX records (they have different priorities):
   
   ```
   Priority 1:
   Host/Name: @
   Type: MX
   Value: aspmx.l.google.com
   TTL: 3600 (or default)
   
   Priority 5:
   Host/Name: @
   Type: MX
   Value: alt1.aspmx.l.google.com
   TTL: 3600
   
   Priority 5:
   Host/Name: @
   Type: MX
   Value: alt2.aspmx.l.google.com
   TTL: 3600
   
   Priority 10:
   Host/Name: @
   Type: MX
   Value: alt3.aspmx.l.google.com
   TTL: 3600
   
   Priority 10:
   Host/Name: @
   Type: MX
   Value: alt4.aspmx.l.google.com
   TTL: 3600
   ```

   **Note**: Some registrars might format this differently. Look for fields like:
   - "Host" or "Name" → Enter `@` or leave blank
   - "Type" → Select `MX`
   - "Priority" → Enter the priority number (1, 5, 5, 10, 10)
   - "Value" or "Points to" → Enter the Google server (aspmx.l.google.com, etc.)
   - "TTL" → 3600 or default

6. **Save** all the MX records

7. **Wait 24-48 hours** for DNS propagation (emails will start working after this)

**Alternative**: Google Workspace setup wizard will show you the exact MX records to add. Follow their instructions!

---

### Step 6: Update SPF Record (Important for Email Delivery)

**Keep SendGrid for sending emails from your app**, but add Google Workspace to your SPF record:

1. **Go to DNS settings** at your domain registrar
2. **Find existing SPF/TXT record** (might look like: `v=spf1 include:sendgrid.net ~all`)
3. **Update SPF record** to include both SendGrid AND Google:
   
   ```
   v=spf1 include:sendgrid.net include:_spf.google.com ~all
   ```

   This allows both SendGrid (for app emails) and Google Workspace (for receiving) to send emails.

---

### Step 7: Test Email Access (After DNS Propagation - 24-48 hours)

1. **Wait 24-48 hours** for DNS to fully propagate
2. **Go to**: https://mail.google.com
3. **Sign in** with:
   - **Email**: toma@my-runner.com
   - **Password**: The password you created in Step 4
4. **You should see your inbox!** 🎉

---

### Step 8: Add toma@my-runner.com to Gmail App on Phone (5 minutes)

1. **Download Gmail app** on your phone (if not already installed)
2. **Open Gmail app**
3. **Tap your profile picture** (top right)
4. **Tap "Add another account"**
5. **Select "Google"**
6. **Enter**: toma@my-runner.com
7. **Enter your password**
8. **Done!** You'll now receive email notifications on your phone

---

### Step 9: Add toma@my-runner.com to Gmail on Laptop (5 minutes)

1. **Go to**: https://mail.google.com in your browser
2. **Click your profile picture** (top right)
3. **Click "Add another account"**
4. **Enter**: toma@my-runner.com
5. **Enter your password**
6. **Sign in**
7. **Done!** You can now switch between accounts easily

---

### Step 10: Set Up Email Forwarding (Optional - 3 minutes)

**If you want emails to also go to your personal Gmail:**

1. **In Gmail** (signed in as toma@my-runner.com):
   - Click **gear icon (⚙️)** → **"See all settings"**
   - Go to **"Forwarding and POP/IMAP"** tab
   - Click **"Add a forwarding address"**
   - Enter: `infomypartsrunner@gmail.com`
   - Click **"Next"** → **"Proceed"** → **"OK"**
2. **Check your personal Gmail** for a verification code
3. **Enter the code** in Gmail settings
4. **Select**: "Forward a copy of incoming mail to" → Choose infomypartsrunner@gmail.com
5. **Select**: "Keep Gmail's copy in the Inbox" (recommended - so you have emails in both places)
6. **Click "Save Changes"**

Now emails sent to toma@my-runner.com will also appear in your personal Gmail!

---

## ⚠️ Important Notes

### SendGrid vs Google Workspace

**Keep both!** They do different things:

- **SendGrid**: For SENDING transactional emails from your app (order confirmations, delivery emails)
  - Keep your SendGrid API key
  - Keep SendGrid DNS records (SPF, DKIM) - just add Google to them
  - SendGrid MX records should be REMOVED (Google handles receiving)

- **Google Workspace**: For RECEIVING emails and having an inbox
  - Add Google Workspace MX records (for receiving)
  - Add Google to SPF record (so you can send from Gmail too)

### DNS Propagation Time

- **MX records**: Can take 24-48 hours to fully propagate
- **TXT records**: Usually faster (few hours)
- **After 24-48 hours**: You'll be able to add toma@my-runner.com to Gmail

### Verify DNS Changes

Use https://mxtoolbox.com/ to check your MX records:
1. Go to: https://mxtoolbox.com/MXLookup.aspx
2. Enter: `my-runner.com`
3. Click "MX Lookup"
4. You should see Google Workspace MX records (aspmx.l.google.com, etc.)

---

## ✅ Checklist

- [ ] Signed up for Google Workspace Business Starter
- [ ] Added domain my-runner.com
- [ ] Verified domain ownership (HTML file or DNS TXT record)
- [ ] Created toma@my-runner.com email account
- [ ] Updated MX records to point to Google Workspace
- [ ] Updated SPF record to include both SendGrid and Google
- [ ] Waited 24-48 hours for DNS propagation
- [ ] Successfully signed in at mail.google.com
- [ ] Added toma@my-runner.com to Gmail on phone
- [ ] Added toma@my-runner.com to Gmail on laptop

---

## 🆘 Troubleshooting

### Domain Not Verifying?
- **Check HTML file**: Make sure it's accessible at https://my-runner.com/google1234567890.html
- **Check DNS TXT record**: Wait 24-48 hours, verify it's added correctly
- **Contact Google Support**: They can help verify

### MX Records Not Working?
- **Check MX records**: Use https://mxtoolbox.com/ to verify
- **Wait longer**: DNS can take 24-48 hours
- **Verify MX records**: Make sure all 5 Google MX records are added

### Can't Add to Gmail After Setup?
- **Wait 24-48 hours**: DNS needs time to propagate
- **Check MX records**: Use mxtoolbox.com to verify they're correct
- **Verify account exists**: Go to admin.google.com → Users → Check toma@my-runner.com

### Emails Not Receiving?
- **Check spam folder**: Emails might be filtered
- **Verify MX records**: Should point to Google, not SendGrid
- **Wait 24-48 hours**: DNS propagation takes time
- **Check SendGrid forwarding**: If you set up forwarding, emails should still work

---

## 📞 Need Help?

- **Google Workspace Support**: https://support.google.com/a
- **Admin Console**: https://admin.google.com
- **DNS Checker**: https://mxtoolbox.com/
- **Google Workspace Setup Help**: https://support.google.com/a/topic/9199766

---

## 🎉 What You'll Have After Setup

✅ Professional email: toma@my-runner.com  
✅ Gmail access on web (mail.google.com)  
✅ Gmail app on phone and laptop  
✅ Email forwarding to personal Gmail (optional)  
✅ Works with SendGrid for sending app emails  
✅ Professional business email setup  

**Total Cost**: $6/month  
**Setup Time**: 30-60 minutes + 24-48 hours DNS wait  

**Ready to get started? Follow the steps above and you'll have toma@my-runner.com working in Gmail in no time!** 🚀📧

