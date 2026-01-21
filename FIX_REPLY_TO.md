# Fix Reply To Email Issue

## Problem
When you reply to contact form emails, the reply doesn't reach the original sender. This happens because the "Reply To" field in EmailJS isn't configured correctly.

## Solution: Update EmailJS Template

### Step 1: Go to EmailJS Dashboard
1. Open [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Navigate to **Email Templates**
3. Click on your template (`Contact Us` or `template_kpcc47c`)

### Step 2: Fix the Reply To Field (Right Panel)
1. In the **Right Panel**, find the **"Reply To"** field
2. Make sure it contains: `{{email}}` (exactly this, with the double curly braces)
3. **IMPORTANT:** This field should NOT be empty
4. This tells Gmail to send replies to the original sender's email address

### Step 3: Verify From Email Settings
1. In the **Right Panel**, check **"From Email"** field
2. If "Use Default Email Address" is checked:
   - This is OK - emails will come from your EmailJS service email
   - The "Reply To" field will handle where replies go
3. If you want to try using sender's email (may not work due to email security):
   - Uncheck "Use Default Email Address"
   - Enter: `{{email}}`
   - **Note:** Many email providers block this for security reasons

### Step 4: Save and Test
1. Click the **"Save"** button (blue button with checkmark)
2. Test the contact form again
3. When you receive the email, click "Reply"
4. Check that the "To" field shows the sender's email address (not your email)

## How It Works
- **From Email:** Shows as your EmailJS service email (or your email) - this is normal
- **Reply To:** Set to `{{email}}` - this is what makes replies go to the sender
- When someone clicks "Reply" in Gmail, it uses the "Reply To" address, not the "From" address

## Troubleshooting
If replies still don't work:
1. Make sure `{{email}}` is in the Reply To field (not `{{from_email}}` or anything else)
2. Check that the variable name matches what we're sending: `email`
3. Try sending a test email from EmailJS dashboard using "Test It" button
4. Check if your email service (Gmail) is blocking the reply-to header
