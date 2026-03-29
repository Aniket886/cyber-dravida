

## Enrich Dravida AI System Prompt with Full Website Knowledge

### Problem
The chatbot's system prompt only has a one-line description of Cyber Dravida. When users ask about services, courses, pricing, events, team, or blog content, the AI can't answer accurately because it doesn't know this information.

### Solution
Expand the `SYSTEM_PROMPT` in `api/chat.ts` to include a comprehensive knowledge base of all frontend content — services, courses with prices and links, events, team info, stats, blog topics, and contact details. No code or API key info will be included.

### Changes — `api/chat.ts` only

Update the `SYSTEM_PROMPT` constant to include:

**About**: Karnataka-based org founded Sep 2025 by Aniket Tegginamath (CEH, TryHackMe Top 1%, OSINT Researcher). Mission: close cybersecurity awareness gap in Tier-2 India.

**Services** (with subpage links):
- Cybersecurity Training → /services/cybersecurity-training
- Awareness Outreach → /services/awareness-outreach
- CTF Competitions → /services/ctf-competitions
- OSINT & Investigation → /services/osint-investigation

**Courses & Products** (with Topmate links and prices):
- Featured: Advanced OSINT Investigation Course — ₹4,999 (topmate.io/cyberdravida/1411837)
- Android Hacking 101 — ₹2,999
- Professional Credential Recovery Tool — ₹999
- Data Recovery from HDD/SSD/Pendrive — ₹699
- Android Gallery Analysis — ₹666
- 1:1 Cyber Career Roadmap (10-min call, Kannada/Hindi) — ₹99

**Events**:
- Upcoming: Cyber Awareness Workshop (Apr 2026, GM University Davangere)
- Upcoming: CTF Challenge — Dravida Cup (May 2026, Online)
- Past: Cybersecurity Orientation (Oct 2025, Davangere)

**Stats**: 500+ students trained, 10+ events, 5+ colleges, 1 year active

**Team**: Aniket Tegginamath — Founder & Lead Researcher. Tags: CEH, OSINT, TryHackMe Top 1%, CCI, Ethical Hacking Mentor. Links: LinkedIn (linkedin.com/in/aniket-tegginamath), TryHackMe (tryhackme.com/p/D4rkMatrix), Linktree (linktr.ee/anikettegginamath)

**Blog topics**: OSINT tools, TryHackMe journey, phishing evolution (linked to Medium: medium.com/@anikettegginamath)

**Contact**: cyberdravida@gmail.com, website: cyberdravida.in

**Values**: Awareness First, Practical Training, Community Driven, Karnataka Focused

The prompt will instruct the AI to answer any question about the website content accurately and provide relevant Topmate/service links when asked about courses or enrollment.

### Files Changed
- `api/chat.ts` — Expand `SYSTEM_PROMPT` with full website knowledge base

