# Gmail Filter Setup - Auto-label Contact Form Emails

This guide will help you automatically route all contact form emails to a "Jobs offers" label in Gmail.

## Step 1: Create the "Jobs offers" Label

1. Open Gmail in your browser
2. Scroll down in the **left sidebar** until you see **"Labels"**
3. Click the **"+"** icon next to "Labels" (or right-click on "Labels" → "Create new label")
4. Enter the label name: **"Jobs offers"**
5. Click **"Create"**
6. The new label will appear in your left sidebar

## Step 2: Create a Gmail Filter

### Option A: Filter by Subject Line (EASIEST - Recommended)

1. In Gmail, click the **search box** at the top
2. Click the **filter icon** (funnel/slider icon) on the right side of the search box
3. In the **"Subject"** field, enter:
   ```
   Contact Us:
   ```
   (This will match any email with "Contact Us:" in the subject)
4. Click **"Create filter"** (blue button at the bottom)
5. Check the following options:
   - ✅ **"Skip the Inbox (Archive it)"** - Emails won't go to Inbox
   - ✅ **"Apply the label:"** - Select **"Jobs offers"** from dropdown
   - ✅ **"Also apply filter to X matching conversations"** (if you want to move existing emails)
6. Click **"Create filter"**

### Option B: Filter by EmailJS Footer Text

1. Click the **search box** → Click the **filter icon**
2. In the **"Has the words"** field, enter:
   ```
   EmailJS.com
   ```
   (Don't use quotes, just the text)
3. Click **"Create filter"**
4. Check:
   - ✅ **"Skip the Inbox (Archive it)"**
   - ✅ **"Apply the label:"** → Select **"Jobs offers"**
   - ✅ **"Also apply filter to X matching conversations"** (optional)
5. Click **"Create filter"**

### Option C: Filter by Specific Text in Body (Most Reliable)

1. Click the **search box** → Click the **filter icon**
2. In the **"Has the words"** field, enter:
   ```
   portfolio contact form
   ```
   (We'll add this text to your EmailJS template - see below)
3. Click **"Create filter"**
4. Check:
   - ✅ **"Skip the Inbox (Archive it)"**
   - ✅ **"Apply the label:"** → Select **"Jobs offers"**
5. Click **"Create filter"**

### Option C: Filter by Sender (If EmailJS uses consistent sender)

1. Click the **search box** → Click the **filter icon**
2. In the **"From"** field, check what email address EmailJS sends from
   - Look at a recent contact form email
   - Note the sender email address
3. Enter that email in the **"From"** field
4. Click **"Create filter"**
5. Check:
   - ✅ **"Skip the Inbox (Archive it)"**
   - ✅ **"Apply the label:"** → Select **"Jobs offers"**
6. Click **"Create filter"**

## Step 3: Test the Filter

1. Have someone submit the contact form (or submit a test yourself)
2. Check your Gmail:
   - The email should **NOT** appear in Inbox
   - The email should appear in **"Jobs offers"** label (left sidebar)
   - Click on "Jobs offers" to see all contact form emails

## Step 4: Optional - Mark as Important

If you want these emails marked as important:

1. Go to **Settings** (gear icon) → **"See all settings"**
2. Click **"Filters and Blocked Addresses"** tab
3. Find your filter and click **"Edit"**
4. Check **"Always mark it as important"**
5. Click **"Update filter"**

## Step 5: Optional - Get Notifications

To get notified about new contact form emails:

1. Go to **Settings** → **"See all settings"**
2. Click **"Filters and Blocked Addresses"**
3. Find your filter and click **"Edit"**
4. Check **"Forward it to:"** (if you want forwarding)
   OR
   Check **"Send text message (SMS) to:"** (if you want SMS alerts)
5. Click **"Update filter"**

## Troubleshooting

### Filter Not Working?
- Make sure the filter criteria matches exactly (case-sensitive for some fields)
- Check if emails are going to Spam first (Gmail filters don't apply to spam)
- Try using "Email sent via EmailJS.com" as it's more unique

### Want to See Emails in Inbox Too?
- Don't check "Skip the Inbox" - emails will go to both Inbox and the label

### Want to Remove Filter?
1. Go to **Settings** → **"Filters and Blocked Addresses"**
2. Find your filter
3. Click **"Delete"**

## Recommended Setup

**Best combination (EASIEST):**
- Filter by: **Subject contains "Contact Us:"** (Option A above)
- Skip the Inbox: ✅ (so they don't clutter your inbox)
- Apply label: "Jobs offers" ✅
- Mark as important: ✅ (optional, but recommended)

**Why this works:**
- Your EmailJS template subject is: `Contact Us: {{title}}`
- All contact form emails will have "Contact Us:" in the subject
- This is the most reliable filter method

## Alternative: Add Unique Text to EmailJS Template

If the filter still doesn't work, you can add a unique identifier to your EmailJS template:

1. Go to EmailJS Dashboard → Email Templates → Your template
2. In the **Content** section, add this at the very top or bottom:
   ```
   [PORTFOLIO-CONTACT-FORM]
   ```
3. Save the template
4. Create a Gmail filter with "Has the words": `PORTFOLIO-CONTACT-FORM`
5. This will be 100% reliable!

This way, all contact form emails will automatically go to your "Jobs offers" label, and you can check them when needed without cluttering your inbox!
