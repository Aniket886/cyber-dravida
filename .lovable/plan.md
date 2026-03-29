

## Redesign Custom Cursor

### Problem
The current cursor is a small 8px dot with CSS transition-based tracking, which feels laggy and unresponsive.

### New Design
Replace with a dual-ring cursor using `requestAnimationFrame` for smooth tracking:

- **Inner dot** (6px): Snaps instantly to mouse position, solid indigo
- **Outer ring** (32px): Follows with smooth lerp (linear interpolation), hollow indigo border that expands on hover over interactive elements
- Use `useRef` + `requestAnimationFrame` instead of `setState` for zero-lag updates
- Detect hovering over clickable elements (`a, button, [role=button]`) to scale up the outer ring
- Hide default cursor via CSS `cursor: none` on body (desktop only)
- Skip entirely on touch devices

### Changes
1. **Rewrite `src/components/CustomCursor.tsx`** — RAF-based dual cursor with lerp tracking
2. **Update `src/index.css`** — Add `cursor: none` on `body` for non-touch devices via `@media (hover: hover)`

