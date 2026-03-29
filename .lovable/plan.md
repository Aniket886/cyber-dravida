

## Create Service Detail Subpages with Guides, Glossary & Roadmaps

### Overview
Create 4 dedicated subpages for each service, linked from the "Learn More →" buttons. Each page includes detailed info, curated resource links, a learning roadmap, and a glossary. A shared layout component keeps styling consistent.

### Files to Create

**1. `src/data/servicePages.ts`** — Central data file with all content for the 4 services:
- Each entry: `slug`, `title`, `icon`, `color`, `heroDescription`, `sections` (What You'll Learn, Who It's For, Key Topics), `resources` (name + URL pairs to external guides/tools), `roadmap` (ordered steps with title + description), `glossary` (term + definition pairs)
- Content covers:
  - **Cybersecurity Training** (`/services/cybersecurity-training`): ethical hacking basics, network security, digital forensics, certifications (CEH, CompTIA), links to TryHackMe, HackTheBox, OWASP, roadmap from basics to advanced pentesting
  - **Awareness Outreach** (`/services/awareness-outreach`): social engineering, phishing, password hygiene, campus workshop info, links to NIST, SANS awareness resources, roadmap for organizing awareness programs
  - **CTF Competitions** (`/services/ctf-competitions`): what CTFs are, categories (web, crypto, pwn, forensics, misc), how to get started, links to CTFtime, PicoCTF, OverTheWire, roadmap from beginner wargames to competitive CTFs
  - **OSINT & Investigation** (`/services/osint-investigation`): OSINT framework, tools (Maltego, Shodan, theHarvester), investigation methodology, links to OSINT Framework site, IntelTechniques, roadmap from Google dorking to advanced profiling

**2. `src/components/ServicePageLayout.tsx`** — Shared layout component used by all 4 pages:
- Back button (Link to `/#services`)
- Hero section with icon, title, description
- Tabbed sections using existing `Tabs` component: Overview | Resources | Roadmap | Glossary
- **Overview tab**: detailed paragraphs, key topics as badge chips, "Who It's For" section
- **Resources tab**: grid of external link cards (open in new tab) with name + description
- **Roadmap tab**: vertical timeline/stepper showing learning path stages
- **Glossary tab**: alphabetically sorted terms using `Accordion` component
- Footer at bottom
- Same dark theme, fonts, animations as main site

**3. `src/pages/ServicePage.tsx`** — Route page component:
- Reads `slug` from URL params via `useParams`
- Looks up data from `servicePages.ts`
- Renders `ServicePageLayout` with the data
- Shows `NotFound` if slug doesn't match

### Files to Modify

**4. `src/App.tsx`** — Add route:
```
<Route path="/services/:slug" element={<ServicePage />} />
```

**5. `src/components/Services.tsx`** — Make "Learn More →" a real link:
- Add `slug` field to each service object
- Replace `<span>Learn More →</span>` with `<Link to={/services/${s.slug}} className="...">Learn More →</Link>`
- Import `Link` from `react-router-dom`

**6. `src/components/Navbar.tsx`** — No changes needed (Services already links to `#services` section on homepage)

### Content Depth Per Page
Each page will have:
- 3-4 detailed paragraphs in overview
- 6-8 key topic badges
- 6-10 curated external resource links (real URLs to TryHackMe, HackTheBox, OWASP, CTFtime, PicoCTF, SANS, NIST, etc.)
- 5-7 roadmap stages with descriptions
- 10-15 glossary terms with definitions

### Design Details
- Uses existing UI components: `Tabs`, `Accordion`, `Card`, `Badge`, `Button`
- Same `circuit-bg` background, same color scheme
- Scroll to top on page load
- Fully responsive (single column on mobile, grid on desktop for resources)
- All external links open in new tabs

