

## Build Team and Blog Sections

### Steps

1. **Build `src/components/Team.tsx`**
   - Heading "Meet the Team" + subheading, centered with fade-up
   - Single wide card (max-w-3xl, horizontal layout on desktop via `md:flex-row`):
     - Left: circular avatar with initials "AT" in indigo gradient background
     - Right: name, role badge (indigo pill), tags row (dark pills for CEH, OSINT, TryHackMe Top 1%, CCI, Ethical Hacking Mentor), bio paragraph, two icon links (Terminal for TryHackMe, Linkedin for LinkedIn) opening in new tabs
   - Below card: muted italic text about contributing with email
   - Framer Motion fade-up on scroll

2. **Build `src/components/Blog.tsx`**
   - Heading "From the Blog" + subheading, centered
   - 3-column grid (1-col mobile) with 3 placeholder blog cards
   - Each card: category Badge on top (colored: OSINT=cyan, CTF=indigo, Awareness=rose), bold title, excerpt text, "Read on Medium →" link to `https://medium.com/@anikettegginamath`, bottom row with author name + Clock icon + "5 min read"
   - Same dark card style with hover glow
   - Below grid: centered "Read All Posts →" outline button linking to Medium
   - Staggered Framer Motion fade-up

### Technical Details
- Icons: `Terminal`, `Linkedin`, `Clock` from lucide-react; Avatar/AvatarFallback from shadcn for the initials circle
- Badge component for role and tags; Card components for layout
- All links use `target="_blank" rel="noopener noreferrer"`
- Consistent `py-20` padding, container layout

