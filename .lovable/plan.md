

## Admin Panel for Cyber Dravida — Full CMS via localStorage

### Overview
Build a complete admin dashboard at `/admin` that allows editing every section of the website. All data stored in localStorage via React Context. No backend, no database.

### Architecture

```text
SiteDataContext (wraps entire app)
    ├── Reads defaults from src/data/siteData.ts
    ├── On mount: merges localStorage overrides
    ├── Provides getter + setter for each section
    └── Persists every update to localStorage

Routes:
  /         → Main site (reads from context)
  /admin    → Password-gated admin panel
```

### Files to Create

**1. `src/data/siteData.ts`** — Default content objects
- Extracts ALL hardcoded data from Hero, About, Services, Courses, Stats, Events, Team, Blog, Contact, Footer, ChatBot into typed default objects
- Each section has its own typed interface

**2. `src/contexts/SiteDataContext.tsx`** — React Context + Provider
- Loads defaults, merges with localStorage on mount
- `updateSection(key, data)` saves to state + localStorage
- `resetSection(key)` and `resetAll()` methods
- Wraps entire app in `App.tsx`

**3. `src/pages/AdminLogin.tsx`** — Password gate
- Dark minimal login screen, single password field
- Hardcoded password: `"cyberdravida2025"`
- Sets `sessionStorage.setItem("cd-admin", "1")` on success
- Redirects to admin dashboard

**4. `src/pages/AdminPanel.tsx`** — Dashboard layout
- Mobile blocker: shows "Please use desktop" on `<768px`
- Left sidebar with 11 section links
- Top bar: logo + "Cyber Dravida Admin" + Logout button
- Floating "Back to Site →" link
- Renders selected section editor in main area

**5. `src/components/admin/` — 11 Editor components
- `HeroEditor.tsx` — text inputs for badge, heading lines, subheading, CTA texts, stat pills
- `AboutEditor.tsx` — heading, paragraphs, feature rows (add/remove, min 1 max 8)
- `ServicesEditor.tsx` — card list with title/desc/icon editing, add/remove/reorder
- `CoursesEditor.tsx` — featured course fields, product grid CRUD, testimonial, bottom CTA
- `StatsEditor.tsx` — stat value/label editing, add/remove (min 1 max 8)
- `EventsEditor.tsx` — event CRUD with status/title/date/location/desc/link
- `TeamEditor.tsx` — member CRUD with avatar base64 upload, links, tags, bottom text
- `BlogEditor.tsx` — post CRUD with tag/title/excerpt/link/author/readtime, bottom URL
- `ContactEditor.tsx` — email, address, website, response time, LinkedIn URL, success message
- `FooterEditor.tsx` — tagline, copyright, nav links
- `ChatbotEditor.tsx` — bot name, subtitle, welcome message, system prompt, on/off toggle

Each editor:
- Pre-fills current values from context
- "Save Changes" button (indigo glow) → updates context + localStorage + green toast
- "Reset to Defaults" button → resets that section
- Unsaved changes warning (yellow toast on navigate)
- Delete/remove actions use AlertDialog confirmation

### Files to Modify

**`src/App.tsx`**
- Wrap everything in `SiteDataProvider`
- Add `/admin` route (checks sessionStorage, shows login or panel)

**All 11 section components** (Hero, About, Services, Courses, Stats, Events, Team, Blog, Contact, Footer, ChatBot)
- Replace hardcoded data with `useSiteData()` context hook
- Keep all animations, styling, and logic identical

**`src/components/Footer.tsx`**
- Add tiny "Admin" link (11px, color #1e1e2e) linking to `/admin`

### Key Design Decisions
- Password stored as a constant in AdminLogin — simple client-side gate, not real auth
- Base64 image storage for team avatars (localStorage limit ~5MB, sufficient for a few photos)
- Reorder via up/down arrow buttons (simpler than drag-and-drop)
- Admin panel uses same dark design system: bg `#080808`/`#13131a`, border `#1e1e2e`, text `#cbd5e1`, focus `#6366f1`
- No animations in admin — clean and functional
- Global "Reset All" button in sidebar footer

### Implementation Order
1. Create `siteData.ts` with all defaults + types
2. Create `SiteDataContext.tsx`
3. Create `AdminLogin.tsx` + `AdminPanel.tsx` layout
4. Create all 11 editors
5. Update all section components to read from context
6. Update `App.tsx` with routes and provider
7. Add admin link to Footer

