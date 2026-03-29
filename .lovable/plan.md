
## Fix “Get in Touch” mobile alignment (box shifted right / clipped)

### What’s causing it
From the current code, the Contact form area is still too tight on mobile:
- `section` has `px-4`
- inner `.container` adds default Tailwind container padding (`2rem` each side)
- form card has `p-6`
- hCaptcha renders with fixed intrinsic width (~303px)

That combination makes the captcha/form content wider than the available inner space. Also, `transform: scale(...)` only changes visual size, not layout width, so it can still overflow and look off-center.

### Implementation plan

1. **Update Contact section horizontal spacing (`src/components/Contact.tsx`)**
   - Replace the current `container` usage with an explicit responsive wrapper that avoids double-padding on mobile:
     - use `w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
   - Keep section clean (`py-20`) and rely on wrapper padding.
   - Add `min-w-0` to grid children/cards to prevent intrinsic-width overflow in flex/grid contexts.

2. **Replace scale-based hCaptcha sizing with true responsive sizing (`src/components/Contact.tsx`)**
   - Import and use `useIsMobile` from `@/hooks/use-mobile`.
   - Remove the `scale-[0.85]` transform wrapper.
   - Render hCaptcha with:
     - `size="compact"` on mobile
     - `size="normal"` on tablet/desktop
   - Keep it centered with `w-full flex justify-center` and `w-fit max-w-full` wrapper.

3. **Keep existing spam/security logic unchanged**
   - Keep honeypot input (`botcheck`)
   - Keep hCaptcha token handling (`onVerify`, `onExpire`, reset on success)
   - Keep zod validation and toast behavior as-is

4. **Retain global overflow protection (`src/pages/Index.tsx`)**
   - Keep `overflow-x-hidden` on page wrapper (already present) as a safety guard.

5. **Mobile QA pass in preview**
   - Verify at **390x844** and **320x568**:
     - no bottom horizontal scrollbar
     - contact form card is centered
     - hCaptcha box fully visible and centered
     - submit button fully visible and aligned
   - Scroll whole page to ensure no section introduces horizontal overflow.
   - Submit one test message to ensure captcha + Web3Forms flow still works.

### Technical details
- Core fix is removing layout-width conflict, not just hiding overflow.
- `size="compact"` is the reliable mobile-safe hCaptcha mode.
- Explicit wrapper padding avoids cumulative spacing (`section + container + card`) that currently shrinks usable width too much.
