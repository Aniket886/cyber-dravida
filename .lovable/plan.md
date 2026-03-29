
## Fix mobile horizontal scroll (bottom scrollbar) and re-verify end-to-end

### What I found
- Most sections are already responsive (`grid sm:/md:/lg:` patterns look correct).
- The strongest overflow suspect is in `Contact.tsx`: hCaptcha is embedded as a fixed-width iframe, while the mobile form card uses `p-8`.
- On a 390px viewport, that combination can make the captcha area wider than the card content, which causes the page-level horizontal scrollbar.

### Implementation plan

1. **Update `src/components/Contact.tsx` (primary fix)**
   - Make card padding mobile-safe:
     - change both contact cards from `p-8` to `p-6 sm:p-8`
   - Wrap hCaptcha in a responsive container:
     - outer wrapper: `w-full overflow-hidden`
     - inner wrapper: centered with optional scale only on very small widths (so captcha never pushes layout wider than viewport)
   - Keep existing submit logic, toast flow, honeypot, and hCaptcha token handling unchanged.

2. **Add a page-level safety guard (secondary protection)**
   - In `src/pages/Index.tsx`, add `overflow-x-hidden` (or `overflow-x-clip`) to the top-level wrapper class.
   - This prevents any tiny transform/iframe rounding overflow from creating a bottom scrollbar across sections.

3. **Mobile verification in preview (390x844)**
   - Scroll through all sections: Hero, About, Services, Courses, Stats, Events, Team, Blog, Contact, Footer.
   - Confirm:
     - no bottom horizontal scrollbar appears at any section
     - contact form + hCaptcha are fully visible and centered
     - Courses cards/testimonials still fit correctly on mobile
     - chatbot panel still opens without creating horizontal overflow

### Technical details
- Root cause is likely fixed-width third-party embed behavior (hCaptcha iframe) inside a padded mobile card.
- Responsive wrappers and reduced mobile padding fix the true source.
- `overflow-x-hidden/clip` is added as a defensive fallback for any residual 1–2px overflow from transforms/animations.
