# TheHomeZilla Landing Page

High-converting, mobile-first landing page for TheHomeZilla.com focused on MA and NH motivated sellers.

## Development

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Environment Setup

To enable the lead capture form email functionality, create a `.env.local` file in the project root:

```env
# Your Gmail or business email (the sender)
EMAIL_USER=yourbusiness@gmail.com

# Gmail App Password (NOT your regular password)
# Generate this at: https://myaccount.google.com/apppasswords
EMAIL_PASS=xxxx xxxx xxxx xxxx

# Where leads should be sent
RECIPIENT_EMAIL=yourbusiness@gmail.com
```

### Getting a Gmail App Password

1. Go to your Google Account: https://myaccount.google.com
2. Select **Security**
3. Under "How you sign in to Google," select **2-Step Verification** (you must enable this first)
4. At the bottom, select **App passwords**
5. Select **Mail** and the device you're using
6. Copy the 16-character password Gmail generates
7. Paste it into your `.env.local` as `EMAIL_PASS` (with or without spaces)

## Notes

- Replace the placeholder hero background in public/hero-placeholder.svg with a real photo.
- Replace the logo in public/Logo1.jpg with your final mark if needed.
- Replace the OpenGraph placeholder in public/og-image.svg with your final social share image.
- Update the phone number, social links, and city list as needed.
