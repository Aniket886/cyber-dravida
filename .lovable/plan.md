

## Build Full Contact Section

### Design
Two-column layout matching the site's existing card/border style. Left column: contact info + social links. Right column: contact form. Gradient heading consistent with other sections.

### Left Column — Contact Info
- Email: cyberdravida@gmail.com (mailto link)
- Location: Karnataka, India (MapPin icon)
- Website: cyber-dravida.lovable.app (Globe icon)
- Social links row: Instagram, LinkedIn, Twitter/X icons with external links (placeholder URLs)

### Right Column — Contact Form
- Fields: Name, Email, Message (using existing Input, Textarea components)
- Validation with zod + react-hook-form (name required max 100, email required valid, message required max 1000)
- Submit button with gradient/glow style
- Frontend-only: on submit show a toast "Message sent!" (no actual backend)

### Styling
- Section heading with purple→indigo→cyan gradient text
- Cards use `bg-card border border-border rounded-card`
- Icons in `bg-primary/10 text-primary` containers
- Motion fadeUp animations matching other sections
- Responsive: stacks to single column on mobile

### Changes
1. **Rewrite `src/components/Contact.tsx`** — Full two-column contact section with form, info, and social links

