

## Add "Courses & Products" Section

### Overview
Create a new full-featured "Courses & Digital Products" section with a featured course hero card, a 3-column product grid, a bottom CTA, and a testimonial quote. Place it between Services and Stats. Update Navbar accordingly.

### Files Changed

**1. Create `src/components/Courses.tsx`** (new file)
- Section with `id="courses"`, heading "Learn With Us" with gradient text, subheading
- **Featured card**: full-width, two-column layout (stacks on mobile), with:
  - "Most Popular" gradient badge, OSINT category pill, title, description, feature checklist with Check icons, "6+ Students Enrolled" badge, 5-star rating
  - Price "₹5,999" in gradient text, "Enroll Now →" glow button linking to Topmate (new tab), muted payment note
  - Indigo border glow shadow, gradient left border (3px)
- **Product grid**: 3 columns desktop / 1 mobile, 5 cards with category tags, titles, descriptions, prices, "Get Access →" outline buttons (all open new tab). Card 5 gets a "Popular" cyan pill
- **Bottom CTA**: centered text + "Visit Our Store →" glow button linking to topmate.io/cyberdravida
- **Testimonial**: dark centered card with quote icon, Kannada quote + translation, "— Verified Student", 5 stars
- **Animations**: fadeUp with stagger on grid cards (matching Services pattern), price count-up animation on scroll using the same pattern as Stats

**2. Update `src/pages/Index.tsx`**
- Import Courses component
- Add `<SectionWrapper><Courses /></SectionWrapper>` between Services and Stats

**3. Update `src/components/Navbar.tsx`**
- Add `{ label: "Courses", href: "#courses" }` between Services and Events in `navLinks`
- Add `"courses"` to `sectionIds` array

### Design Consistency
- Same color variables (primary, secondary, destructive), card styles, font families (Space Grotesk headings, Inter body)
- Same fadeUp animation pattern from Services/Stats
- Same hover effects (translate-y + border glow)
- Responsive: grid collapses to single column, featured card stacks vertically

