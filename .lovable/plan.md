

## Build Stats and Events Sections

### Steps

1. **Build `src/components/Stats.tsx`**
   - Wrapper with slightly lighter bg (`bg-[#0f0f16]`), glowing indigo divider lines (1px, 30% opacity) top and bottom
   - Heading "Our Impact So Far" centered
   - 4 stat cards in a responsive row: "500+" Students Trained, "10+" Events Conducted, "5+" Colleges Reached, "1" Year Active (Est. 2025)
   - Large number with indigo-to-cyan gradient text, muted label below
   - Custom `useCountUp` hook: uses `useInView` from framer-motion + `useEffect` with `requestAnimationFrame` to animate from 0 to target number over ~1.5s when section scrolls into view
   - Framer Motion `whileInView` fade-up on the stat grid

2. **Build `src/components/Events.tsx`**
   - Heading "Events & Programs" + subheading
   - 3-column grid (horizontal scroll on mobile via `flex overflow-x-auto` or `grid sm:grid-cols-3`)
   - Each card: Badge tag ("Upcoming" cyan / "Past" muted), bold title, date+location row with Calendar and MapPin lucide icons, description, "Know More →" outline button
   - Same dark card style with `hover:-translate-y-1` and indigo border glow
   - Staggered Framer Motion fade-up using `whileInView`
   - Hardcoded 3 events: Cyber Awareness Workshop (Apr 2026, Upcoming), CTF Challenge Dravida Cup (May 2026, Upcoming), Cybersecurity Orientation (Oct 2025, Past)

### Technical Details
- Counter hook: track `inView` boolean, animate with easing over ~60 frames, round to int, append "+" suffix where needed
- Use existing shadcn Card, Badge components; lucide-react Calendar, MapPin icons
- Consistent `py-20` section padding, container layout
- Events mobile: `flex gap-6 overflow-x-auto snap-x` with `min-w-[300px]` cards, or responsive grid

