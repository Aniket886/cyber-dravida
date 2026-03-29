

## Build About and Services Sections

### Steps

1. **Build `src/components/About.tsx`**
   - Section heading "About Cyber Dravida" with indigo underline accent
   - Two-column grid (stacks on mobile): left has a dark card with cyan left border containing two paragraphs about the org and founder; right has 4 feature rows (Shield, BookOpen, Users, Globe icons) each with bold label + description
   - Framer Motion fade-up on scroll using `whileInView`

2. **Build `src/components/Services.tsx`**
   - Section heading "What We Do" + subheading
   - 2x2 card grid (1-col mobile) with 4 service cards: Cybersecurity Training (Zap/cyan), Awareness Outreach (Radio/indigo), CTF Competitions (Flag/rose), OSINT & Investigation (Search/cyan)
   - Each card: icon, title, description, "Learn More →" text link
   - Hover effect: `hover:-translate-y-1` + indigo border glow via `hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)]`
   - Staggered Framer Motion fade-up on scroll using `whileInView` with delay per card index

### Technical Details
- Use existing shadcn Card components, lucide-react icons, Framer Motion `motion.div` with `whileInView` + `viewport={{ once: true }}`
- Consistent section padding: `py-20` with container
- All content hardcoded inline

