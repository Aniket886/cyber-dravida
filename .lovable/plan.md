

## Cyber Dravida — Landing Page Scaffold

### What we're building
A single-page cybersecurity landing website for "Cyber Dravida" with a dark, techy design system. This first step scaffolds the layout structure with all 11 sections as placeholders.

### Steps

1. **Update `index.html`** — Import Inter and Space Grotesk fonts from Google Fonts

2. **Update `index.css`** — Apply the dark cybersecurity design system (custom CSS variables, background color #0a0a0f, subtle circuit/grid SVG pattern overlay, font assignments)

3. **Update `tailwind.config.ts`** — Add custom colors (indigo accent, cyan secondary, rose highlight), border radius tokens (12px cards, 8px buttons), and extend the theme

4. **Install Framer Motion** — Add `framer-motion` as a dependency

5. **Create placeholder section files** — Create empty component files for: `Navbar`, `Hero`, `About`, `Services`, `Stats`, `Events`, `Team`, `Blog`, `Contact`, `ChatBot`, `Footer` (each exports a simple div with an id and comment)

6. **Update `App.tsx`** — Import all 11 section components, render them in order within a root layout div with the dark background and pattern overlay

