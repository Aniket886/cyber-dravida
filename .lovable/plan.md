

## Final Polish Pass — Cyber Dravida Landing Page

### Overview
Apply 9 polish items across the site: scroll animations, navbar active state, smooth scroll offset, mobile audit, favicon + meta tags, custom cursor, loading screen, and minor performance tweaks. No backend, no Supabase.

Note: Contact and Footer sections are still placeholders — they will need to be built separately.

### Steps

1. **Create SVG favicon + update `index.html` meta tags**
   - Create `public/favicon.svg` — a simple indigo shield SVG
   - Update `index.html`: add favicon link, update `<title>`, add `<meta>` for description, og:title, og:description, og:type, twitter:card

2. **Add loading screen component (`src/components/LoadingScreen.tsx`)**
   - Full-screen overlay with Shield icon + "Cyber Dravida" text + indigo progress bar
   - Auto-dismiss after 1.5s with fade-out via Framer Motion
   - Render in `App.tsx` wrapping the router, using a `useState` + `useEffect` timer

3. **Add custom cursor (`src/index.css`)**
   - CSS-only approach: hide default cursor on body, add a small indigo dot pseudo-element via a lightweight JS listener that updates CSS custom properties `--cx` and `--cy`
   - Actually: add a tiny `CustomCursor` component in `App.tsx` — a fixed 8px indigo circle that follows mouse with CSS `transition: 0.15s` for lag effect. Desktop only (hidden on touch devices via media query).

4. **Create `src/components/SectionWrapper.tsx`**
   - Reusable Framer Motion wrapper: `motion.div` with `initial={{ opacity: 0, y: 40 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, `transition={{ duration: 0.5 }}`
   - Wrap each section in `Index.tsx` with this component (About, Services, Stats, Events, Team, Blog, Contact)
   - Hero already has its own animations, so skip it

5. **Navbar active state with IntersectionObserver**
   - Update `Navbar.tsx`: use a `useEffect` with `IntersectionObserver` watching all section IDs
   - Track `activeSection` state, highlight the matching nav link with `text-primary` class
   - Threshold ~0.3, rootMargin to offset fixed navbar height

6. **Smooth scroll with navbar offset**
   - Update the `scrollTo` helper in Navbar and Hero to use `window.scrollTo` with calculated offset (element.offsetTop - 64px navbar height) instead of `scrollIntoView`
   - Or add `scroll-margin-top: 4rem` to each section via CSS (simpler approach — add to `index.css`)

7. **Mobile responsiveness audit (CSS fixes in `index.css`)**
   - Add `scroll-margin-top: 4rem` to all sections
   - Ensure chatbot panel is responsive: on mobile (`max-w-[calc(100vw-2rem)]`) and shorter height
   - Team card: ensure `flex-col` on mobile (already `md:flex-row`)
   - Events grid: ensure single column on small screens

8. **Performance: memoize chatbot messages**
   - ChatBot already looks fine, but wrap the messages `.map()` rendering in `useMemo` keyed on `messages` and `loading`

### Technical Details
- Favicon: inline SVG with `<path>` for a shield shape, fill `#6366f1`
- Loading screen: `AnimatePresence` + `motion.div` with `exit={{ opacity: 0 }}`, controlled by a boolean state in `App.tsx`
- Custom cursor: `position: fixed; pointer-events: none; z-index: 9999` div, `onMouseMove` updates `left`/`top` with `transition: all 0.15s ease-out`
- IntersectionObserver in Navbar: observe sections `hero, about, services, events, blog, contact`, update active state on intersection
- `scroll-margin-top` in CSS is the cleanest approach for navbar offset

