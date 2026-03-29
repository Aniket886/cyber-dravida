# 🛡️ Cyber Dravida — Official Website

> **Where Curiosity Meets Cybersecurity.**

Official landing page for [Cyber Dravida](https://cyberdravida.in) — a Karnataka-based cybersecurity organization focused on training, awareness, and building a security-first mindset across India.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| AI Chatbot | Groq API (LLaMA 3.3 70B) |
| Forms | react-hook-form |
| Icons | lucide-react |
| Fonts | Inter + Space Grotesk (Google Fonts) |
| Hosting | Vercel / Netlify |

> ⚠️ **No backend. No database. No Supabase. Fully static frontend.**

---

## 📁 Project Structure

```
cyber-dravida/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Events.tsx
│   │   ├── Team.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── ChatBot.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── .env
├── .env.example
├── .gitignore
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/cyber-dravida-website.git
cd cyber-dravida-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` and add your Groq API key:

```env
VITE_GROQ_API_KEY=your_groq_api_key_here
```

> ⚠️ **Never commit your `.env` file to Git.** It is already in `.gitignore`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Build for production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 🤖 Groq AI Chatbot

The site includes **Dravida AI** — a floating chatbot powered by Groq's LLaMA 3.3 70B model.

- The chatbot is scoped to answer only cybersecurity and Cyber Dravida related questions
- API calls are made directly from the frontend using your `VITE_GROQ_API_KEY`
- No conversation history is stored anywhere
- To get a Groq API key: [console.groq.com](https://console.groq.com)

---

## 🌐 Sections

| Section | Description |
|---------|-------------|
| Hero | Tagline, CTAs, and key stats |
| About | Organization mission and values |
| Services | Training, Outreach, CTF, OSINT |
| Stats | Impact numbers (animated counters) |
| Events | Upcoming and past events |
| Team | Founder profile with links |
| Blog | Medium articles (linked externally) |
| Contact | Frontend contact form |
| Chatbot | Dravida AI floating assistant |

---

## 🔗 Important Links

| Resource | URL |
|----------|-----|
| Live Site | https://cyberdravida.in |
| Founder LinkedIn | https://linkedin.com/in/aniket-tegginamath |
| TryHackMe Profile | https://tryhackme.com/p/D4rkMatrix |
| Medium Blog | https://medium.com/@anikettegginamath |
| Contact Email | cyberdravida@gmail.com |

---

## 📝 .env.example

```env
# Groq API Key — get yours at https://console.groq.com
VITE_GROQ_API_KEY=your_groq_api_key_here
```

---

## 🛠️ Customization Guide

### Updating Stats
Edit the numbers in `src/components/Stats.tsx`

### Adding Events
Add new event objects in `src/components/Events.tsx`

### Adding Team Members
Add new member cards in `src/components/Team.tsx`

### Updating Blog Posts
Blog cards link to Medium. Update titles/excerpts in `src/components/Blog.tsx`

### Changing Colors
All design tokens are in `tailwind.config.ts` and `src/index.css`

---

## 🚢 Deployment

See **DEPLOYMENT.md** for step-by-step instructions to deploy on Vercel or Netlify with the `cyberdravida.in` domain.

---

## 📄 License

© 2025 Cyber Dravida. All rights reserved.

Built with ❤️ in Karnataka, India by [Aniket Tegginamath](https://linkedin.com/in/aniket-tegginamath).
