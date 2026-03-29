# 🚀 Cyber Dravida — Deployment Guide

Complete guide to deploy the Cyber Dravida website and connect it to **cyberdravida.in**

---

## 📋 Before You Start

Make sure you have:
- [ ] GitHub account with the project pushed to a repository
- [ ] Groq API key (`VITE_GROQ_API_KEY`)
- [ ] `cyberdravida.in` domain purchased (recommended: GoDaddy / Namecheap / Google Domains)
- [ ] Vercel or Netlify account (both are free)

---

## OPTION A — Deploy on Vercel ✅ (Recommended)

Vercel is the fastest and most reliable option for Vite + React projects.

---

### Step 1 — Push your project to GitHub

```bash
# Inside your project folder
git init
git add .
git commit -m "initial commit: cyber dravida website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cyber-dravida-website.git
git push -u origin main
```

> Make sure `.env` is in your `.gitignore` — **never push your API key to GitHub.**

---

### Step 2 — Import project on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up / Log in with GitHub
2. Click **"Add New Project"**
3. Find your `cyber-dravida-website` repository → Click **"Import"**
4. Vercel auto-detects Vite. Confirm settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Do **NOT** click Deploy yet — go to next step first.

---

### Step 3 — Add Environment Variable on Vercel

Before deploying:

1. Scroll down to **"Environment Variables"** on the same screen
2. Add:
   - Name: `VITE_GROQ_API_KEY`
   - Value: `your_groq_api_key_here`
   - Environment: ✅ Production ✅ Preview ✅ Development
3. Click **"Add"**
4. Now click **"Deploy"** 🚀

Vercel will build and deploy. You'll get a URL like:
`https://cyber-dravida-website.vercel.app`

---

### Step 4 — Connect cyberdravida.in to Vercel

#### In Vercel:
1. Go to your project → **Settings** → **Domains**
2. Click **"Add Domain"**
3. Type: `cyberdravida.in` → Click **"Add"**
4. Also add: `www.cyberdravida.in` → Click **"Add"**
5. Vercel will show you DNS records to configure. Keep this tab open.

#### In your Domain Registrar (GoDaddy / Namecheap / etc.):

Go to your domain's **DNS Settings** and add:

**For the root domain (`cyberdravida.in`):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |

**For www subdomain:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

> ⏱️ DNS changes take 10 minutes to 48 hours to propagate. Usually done within 30 minutes.

#### Verify in Vercel:
- Go back to Vercel → Domains
- Both `cyberdravida.in` and `www.cyberdravida.in` should show ✅ **Valid Configuration**
- Vercel auto-provisions an **SSL certificate (HTTPS)** — free, automatic

---

### Step 5 — Set up Auto-Deploy (optional but recommended)

Every time you push to `main` on GitHub, Vercel automatically rebuilds and redeploys. This is enabled by default. No extra setup needed.

---

## OPTION B — Deploy on Netlify

---

### Step 1 — Push to GitHub (same as Vercel Step 1)

---

### Step 2 — Import on Netlify

1. Go to [netlify.com](https://netlify.com) → Sign up / Log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect GitHub → Select `cyber-dravida-website`
4. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Do **NOT** deploy yet.

---

### Step 3 — Add Environment Variable on Netlify

1. Click **"Show advanced"** on the deploy settings screen
2. Click **"New variable"**
3. Add:
   - Key: `VITE_GROQ_API_KEY`
   - Value: `your_groq_api_key_here`
4. Click **"Deploy site"**

---

### Step 4 — Connect cyberdravida.in to Netlify

#### In Netlify:
1. Go to **Site Settings** → **Domain Management**
2. Click **"Add custom domain"**
3. Enter `cyberdravida.in` → Click **"Verify"** → **"Add domain"**

#### In your Domain Registrar:

**For the root domain (`cyberdravida.in`):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |

**For www:**
| Type | Name | Value |
|------|------|-------|
| CNAME | www | YOUR_SITE.netlify.app |

> Replace `YOUR_SITE` with your Netlify site name (shown in dashboard).

Netlify also auto-provisions **free HTTPS** via Let's Encrypt.

---

## 🔁 Updating the Site After Changes

### If using Vercel or Netlify with GitHub:
```bash
# Make your changes locally
git add .
git commit -m "update: added new event"
git push origin main
# → Site automatically rebuilds and deploys in ~1 minute
```

### Updating Environment Variables:
- Vercel: Project → Settings → Environment Variables → Edit → **Redeploy**
- Netlify: Site Settings → Environment Variables → Edit → **Trigger deploy**

---

## 🔒 Security Checklist

- [ ] `.env` file is in `.gitignore` (never pushed to GitHub)
- [ ] `VITE_GROQ_API_KEY` added only via Vercel/Netlify dashboard
- [ ] HTTPS is active on `cyberdravida.in` (green lock in browser)
- [ ] No Supabase or any database connected
- [ ] Contact form does not actually send emails (frontend only — add EmailJS later if needed)

---

## ⚡ Future Upgrades (When You're Ready)

| Feature | Tool to Use |
|---------|-------------|
| Actually send emails from contact form | EmailJS (free tier, no backend needed) |
| Add a blog CMS | Notion API or Contentful |
| Analytics | Vercel Analytics (free) or Plausible |
| Rate-limit the Groq chatbot | Add a lightweight Cloudflare Worker |
| Admin dashboard | Build separately, connect via Supabase later |

---

## 🆘 Common Issues & Fixes

| Problem | Fix |
|---------|-----|
| Build fails on Vercel | Check that `VITE_GROQ_API_KEY` is added in dashboard |
| Domain not connecting | Wait 30–60 min for DNS propagation; check A record value |
| Chatbot not responding | Verify API key is correct and Groq account is active |
| White screen on deploy | Check browser console for errors; usually a missing env variable |
| `www` not redirecting | Add both `cyberdravida.in` and `www.cyberdravida.in` in Vercel/Netlify |

---

## 📞 Support

- Groq API issues → [console.groq.com](https://console.groq.com)
- Vercel issues → [vercel.com/docs](https://vercel.com/docs)
- Netlify issues → [docs.netlify.com](https://docs.netlify.com)
- Domain DNS help → your registrar's support chat

---

*Deployment guide for Cyber Dravida Website | Built by Aniket Tegginamath*
