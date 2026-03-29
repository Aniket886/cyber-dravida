

## Apply Official Logo Across the Site

### Overview
Copy the uploaded `CDTRANS.png` to `public/` and replace the Shield icon with the logo image in 6 locations: Navbar, Hero, Loading Screen, Footer, Favicon, and ChatBot header.

### Steps

1. **Copy logo to `public/CDTRANS.png`**

2. **Update `index.html`** — Replace SVG favicon with PNG references:
   - `<link rel="icon" type="image/png" href="/CDTRANS.png" />`
   - `<link rel="apple-touch-icon" href="/CDTRANS.png" />`
   - Remove existing SVG favicon link

3. **Update `src/components/Navbar.tsx`** — Replace `<Shield>` icon with `<img src="/CDTRANS.png" alt="Cyber Dravida" className="h-10 w-10 object-contain" />`, keep "Cyber Dravida" text

4. **Update `src/components/Hero.tsx`** — Add logo image centered above the heading with `h-24 w-24`, indigo drop-shadow glow, and Framer Motion fade-in + scale animation (0.8 → 1)

5. **Update `src/components/LoadingScreen.tsx`** — Replace `<Shield>` with `<img src="/CDTRANS.png" className="h-28 w-28 object-contain animate-pulse" />`, remove Shield import

6. **Update `src/components/Footer.tsx`** — Replace `<Shield>` with `<img src="/CDTRANS.png" className="h-9 w-9 object-contain" />` next to text (Footer is currently a placeholder — will add minimal logo + text treatment)

7. **Update `src/components/ChatBot.tsx`** — Replace `<Shield>` in chat panel header with `<img src="/CDTRANS.png" alt="Dravida AI" className="h-7 w-7 object-contain" />`

### Technical Details
- All locations use plain `<img>` tags with `object-contain`, no background/border-radius
- The floating chat button keeps the `MessageCircle` icon (not the logo)
- Footer is currently empty — will add the logo + "Cyber Dravida" text only for now since the full Footer build was a separate task

