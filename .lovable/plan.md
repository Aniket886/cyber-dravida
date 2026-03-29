

## Redesign Custom Cursor — Comet Trail Design

### Problem
The current dot-and-ring cursor is generic and overused. The user wants something fresh and unique.

### New Design: "Comet Trail" Cursor
A glowing indigo crosshair tip with a fading particle trail that follows the mouse, giving a comet/energy streak effect — fitting for a cybersecurity site.

**Primary cursor**: A small diamond/rhombus shape (rotated square, 8px) instead of a circle — sharper, techy feel. Glows indigo.

**Trail**: 12 trail particles stored in a ring buffer. Each is a small circle that fades out and shrinks as it ages. They sample the mouse position every few frames, creating a smooth comet tail. Colors shift from indigo to cyan along the trail.

**Hover state**: On interactive elements, the diamond morphs into a rotating square with a pulsing glow border — visually distinct from the generic "ring expands" pattern.

### Technical Approach
- Single canvas element (`<canvas>`) rendered at full viewport, `pointer-events: none`, `z-index: 9999`
- All drawing via `requestAnimationFrame` + canvas 2D context — no DOM nodes for trail particles (much more performant)
- Trail: array of 15 past positions, drawn as circles with decreasing size (3px → 1px) and opacity (0.6 → 0), color interpolating indigo → cyan
- Primary cursor: diamond drawn via canvas `rotate(45°)` + `fillRect`
- Hover detection same as before (mouseover on clickable elements)
- On hover: diamond scales up + draws a rotating square outline around it
- Touch device detection: skip entirely
- Canvas resizes on window resize

### Changes
1. **Rewrite `src/components/CustomCursor.tsx`** — Canvas-based comet trail cursor
2. **Update `src/index.css`** — Keep existing `cursor: none` rule (already in place)

