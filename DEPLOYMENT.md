# Deployment Guide - TheHomeZilla

## Step 1: Set Up Environment Variables Locally

Before deploying, test the email form locally:

1. Create `.env.local` in your project root:
```env
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your-16-char-app-password
RECIPIENT_EMAIL=youremail@gmail.com
```

2. Get your Gmail App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Enable 2-Step Verification first if not already enabled
   - Create a new app password for "Mail"
   - Copy the 16-character password

3. Test locally: `npm run dev` and submit a test lead

## Step 2: Push to GitHub

Run these commands in your terminal:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial TheHomeZilla landing page"

# Add your GitHub repository
git remote add origin https://github.com/eduardoinoa18/thehomezilla.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `thehomezilla` repository
4. Vercel will auto-detect Next.js - click **"Deploy"**
5. Wait 2-3 minutes for the first deployment

## Step 4: Add Environment Variables to Vercel

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add these three variables:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your 16-char app password
   - `RECIPIENT_EMAIL` = where you want leads sent
3. Click **"Save"**
4. Go to **Deployments** tab and click **"Redeploy"** (3-dot menu)

## Step 5: Connect GoDaddy Domain

### In Vercel:
1. Go to your project **Settings** → **Domains**
2. Type `thehomezilla.com` and click **"Add"**
3. Vercel will show you DNS records to add

### In GoDaddy:
1. Log in to GoDaddy and go to **My Products** → **Domains**
2. Click **"DNS"** next to thehomezilla.com
3. Add these records (Vercel will show you the exact values):

**A Record:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21` (Vercel's IP)
- TTL: 600 seconds

**CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: 3600 seconds

4. **Delete** any conflicting A or CNAME records for `@` and `www`
5. Save changes

### Wait for SSL:
- DNS propagation: 5-60 minutes
- SSL certificate: Automatic once DNS is verified
- Check status in Vercel dashboard

## Step 6: Test Your Live Site

Once DNS propagates:
1. Visit https://thehomezilla.com
2. Submit a test lead
3. Check your email inbox

## Troubleshooting

**Email not sending?**
- Check Vercel environment variables are set correctly
- Verify Gmail App Password (not regular password)
- Check spam folder
- View logs in Vercel **Functions** tab

**Domain not working?**
- Wait 30-60 minutes for DNS propagation
- Use https://dnschecker.org to verify DNS has updated globally
- Check GoDaddy DNS settings match Vercel exactly

**Build errors?**
- Check the Vercel **Deployments** tab for error logs
- Ensure all dependencies are in package.json
- Verify TypeScript has no errors locally

## Next Steps After Launch

1. Update phone number in all components (currently placeholder)
2. Replace hero background image
3. Add real property photos
4. Set up Google Analytics (add tracking ID to layout.tsx)
5. Submit sitemap to Google Search Console
