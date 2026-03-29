

## Build Navbar and Hero Sections

### Overview
Build the fully styled and animated Navbar and Hero sections for Cyber Dravida with smooth scroll navigation, mobile drawer, Framer Motion animations, and a floating particle background.

### Steps

1. **Build `src/components/Navbar.tsx`**
   - Fixed top navbar with `backdrop-blur-lg` and `bg-background/80`, bottom border `border-[#1e1e2e]`
   - Left: Lucide `Shield` icon (indigo) + "Cyber Dravida" text in Space Grotesk bold
   - Right: horizontal nav links (Home, About, Services, Events, Blog, Contact) using smooth scroll `<a href="#section-id">`
   - Far right: glowing "Join Us" button (indigo fill, box-shadow glow) scrolling to `#contact`
   - Mobile: hamburger icon toggling a Sheet/drawer from top with all nav links stacked vertically
   - Use `useState` for mobile menu open/close and scroll-based background opacity

2. **Build `src/components/Hero.tsx`**
   - Full viewport `min-h-screen` with flexbox centering
   - Animated floating particles background using Framer Motion — ~15 small dots with random positions, opacity, and infinite y-axis float animation
   - Top pill badge: "Karnataka's Cybersecurity Community" with cyan left border, dark bg, rounded-full
   - Two-line heading in Space Grotesk: "Where Curiosity" (white) and "Meets Cybersecurity." (indigo-to-cyan gradient via `bg-gradient-to-r bg-clip-text text-transparent`)
   - Subheading paragraph with muted foreground color
   - Two CTA buttons: "Explore Programs" (filled indigo with glow shadow) and "Meet the Team" (outline border)
   - Three inline stat pills: "500+ Trained", "Karnataka Based", "Est. 2025"
   - Staggered Framer Motion `fade-up` entrance: badge → heading → subtext → buttons → stats, each delayed ~0.15s

3. **Add CSS for glow effect in `src/index.css`**
   - `.glow-btn` utility class with indigo box-shadow for the CTA button glow
   - Particle/floating animation keyframes if needed beyond Framer Motion

### Technical Details
- Smooth scroll: `<a>` tags with `onClick` using `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })` and `e.preventDefault()`
- Mobile menu uses shadcn Sheet component (already available) with `side="top"`
- Framer Motion `motion.div` with `initial`, `animate`, `transition` for staggered hero entrance
- Particles: array of ~15 objects with random x/y/size/duration, rendered as absolute-positioned `motion.div` circles with infinite `y` animation
- `scroll-smooth` added to the root layout or html

