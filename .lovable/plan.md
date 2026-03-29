

## Add Testimonials Carousel to Courses Section

### Overview
Replace the single testimonial card with an auto-playing carousel of multiple testimonials, each with Kannada text and English translation. Use Embla Carousel (already in the project via the `carousel.tsx` UI component).

### Testimonials Data
Add 5 testimonials array with `quote` (Kannada), `translation` (English), and `author` fields:

1. Current one (Verified Student) — ethical hacking session
2. "ಈ ಕೋರ್ಸ್ ನನ್ನ ಕೆರಿಯರ್ ಅನ್ನು ಬದಲಾಯಿಸಿತು..." — "This course changed my career. The OSINT techniques taught here are world-class." — OSINT Student
3. "ಡಾರ್ಕ್ ವೆಬ್ ಇನ್ವೆಸ್ಟಿಗೇಶನ್ ಬಗ್ಗೆ ಇಷ್ಟು ಸ್ಪಷ್ಟವಾಗಿ..." — "No one explains dark web investigation this clearly. Highly recommended!" — Cyber Security Enthusiast
4. "ಕನ್ನಡದಲ್ಲಿ ಸೈಬರ್ ಸೆಕ್ಯುರಿಟಿ ಕಲಿಯಲು..." — "Learning cybersecurity in Kannada made it so much easier to understand." — College Student
5. "1:1 ಮೆಂಟಾರ್‌ಶಿಪ್ ಸೆಷನ್ ತುಂಬಾ ಉಪಯುಕ್ತವಾಗಿತ್ತು..." — "The 1:1 mentorship session was incredibly useful. Got a clear career roadmap." — Career Mentee

### Implementation — `src/components/Courses.tsx`

1. Import `Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext` from `@/components/ui/carousel` and Autoplay from `embla-carousel-autoplay`
2. Add `testimonials` array with the 5 items above
3. Replace the single testimonial card with a Carousel using Autoplay plugin (3s delay, stopOnInteraction: false)
4. Each carousel item renders the same card style: Quote icon, 5 stars, Kannada quote, English translation, author name
5. Add dot indicators below showing active slide
6. Keep prev/next arrow buttons styled to match the theme

### Package
- Install `embla-carousel-autoplay` for auto-play functionality

### Files Changed
- `src/components/Courses.tsx` — Replace single testimonial with carousel of 5

