# EmailJS Setup Guide

To enable the contact form to send emails to your inbox, you need to set up EmailJS.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)

## Step 2: Create an Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy your **Service ID**

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template** (or edit your existing template)
3. **IMPORTANT - Set the Subject Line:**
   - In the template editor, find the **Subject** field (top of the page)
   - Change from: `Contact Us: {{title}}`
   - To: `{{title}}` (this will show just the subject from the form)
   - **OR** keep `Contact Us: {{title}}` if you want the prefix

4. **IMPORTANT - Set the From Email (Right Panel):**
   - In the **Right Panel**, find **"From Email"** field
   - **Uncheck** "Use Default Email Address"
   - Enter: `{{email}}` (this will use the sender's email address)
   - **Note:** Some email services may not allow custom "From" emails for security. If this doesn't work, the "Reply To" field will still work.

5. **Set the Reply To (Right Panel):**
   - Make sure **"Reply To"** field contains: `{{email}}`
   - This ensures you can reply directly to the sender

6. **Set the Email Body (Content Tab):**
   Update your template content to clearly show sender information:

```
From: {{name}}
Email: {{email}}

Subject: {{title}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
Reply to: {{email}}
```

7. **Template Variables (must match exactly):**
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email address
   - `{{title}}` - Email subject from the form
   - `{{message}}` - Email message
   - `{{time}}` - Timestamp (optional)

8. Save the template and copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** and copy it

## Step 5: Configure Environment Variables

1. Create a file named `.env.local` in the root of your project
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials from EmailJS
4. **Important**: Restart your development server after adding environment variables

## Step 6: Test

1. Start your development server: `npm run dev`
2. Go to the contact form on your portfolio
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting

- Make sure `.env.local` is in the root directory (same level as `package.json`)
- Restart your dev server after adding environment variables
- Check the browser console for any error messages
- Verify your EmailJS service is active and properly configured
- Make sure your email template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
