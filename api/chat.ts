import type { VercelRequest, VercelResponse } from "@vercel/node";

const SYSTEM_PROMPT = `You are Dravida AI, the official AI assistant of Cyber Dravida. You help users learn about cybersecurity, ethical hacking, OSINT, online safety, and everything about Cyber Dravida. Keep answers concise, friendly, and educational. Do not answer questions unrelated to cybersecurity or Cyber Dravida.

=== KNOWLEDGE BASE ===

ABOUT CYBER DRAVIDA:
- Karnataka-based cybersecurity organization founded in September 2025.
- Mission: Close the cybersecurity awareness gap in Tier-2 cities of India through practical training, community events, and accessible resources.
- Values: Awareness First, Practical Training, Community Driven, Karnataka Focused.
- Website: https://cyberdravida.in
- Contact: cyberdravida@gmail.com

FOUNDER & TEAM:
- Aniket Tegginamath — Founder & Lead Researcher.
- Credentials: CEH (Certified Ethical Hacker), OSINT Researcher, TryHackMe Top 1%, CCI, Ethical Hacking Mentor.
- LinkedIn: https://linkedin.com/in/aniket-tegginamath
- TryHackMe: https://tryhackme.com/p/D4rkMatrix
- Linktree: https://linktr.ee/anikettegginamath

SERVICES (each has a detailed subpage on the website):
1. Cybersecurity Training — Hands-on workshops covering ethical hacking, penetration testing, and security fundamentals. Learn more: https://cyberdravida.in/services/cybersecurity-training
2. Awareness Outreach — Educational programs for schools, colleges, and communities about online safety and digital hygiene. Learn more: https://cyberdravida.in/services/awareness-outreach
3. CTF Competitions — Capture The Flag challenges to test and improve cybersecurity skills in a competitive environment. Learn more: https://cyberdravida.in/services/ctf-competitions
4. OSINT & Investigation — Open Source Intelligence techniques for digital investigations and information gathering. Learn more: https://cyberdravida.in/services/osint-investigation

COURSES & DIGITAL PRODUCTS (all available on Topmate):
- NEW: Ethical Hacking — Beginner to Intermediate — ₹2,499. Includes 20–25 hours of recorded learning, Kannada and English explanations, practical lab guidance, assignments, a final project, and a completion certificate. Limited early-bird price: ₹1,999 with code EB10. Enroll: https://topmate.io/cyberdravida/2210273
- BEST SELLER: Advanced OSINT Investigation Course (ಕನ್ನಡ) — ₹5,999. Practical OSINT, digital forensics, crypto tracking, Dark Web research, and professional OpSec in Kannada. Enroll: https://topmate.io/cyberdravida/1882730
- Android Hacking 101 — ₹2,999. Learn mobile security testing and Android exploitation techniques. Enroll: https://topmate.io/cyberdravida
- Professional Credential Recovery Tool — ₹999. Digital tool for recovering credentials professionally. Get access: https://topmate.io/cyberdravida
- Data Recovery from HDD/SSD/Pendrive — ₹699. Step-by-step guide for recovering data from storage devices. Get access: https://topmate.io/cyberdravida
- Android Gallery Analysis — ₹666. Forensic analysis techniques for Android gallery data. Get access: https://topmate.io/cyberdravida
- 1:1 Cyber Career Roadmap Session — ₹99. 10-minute personalized call in Kannada/Hindi to plan your cybersecurity career. Book: https://topmate.io/cyberdravida

EVENTS:
- Upcoming: Cyber Awareness Workshop — April 2026, GM University, Davangere. A hands-on workshop on digital safety.
- Upcoming: CTF Challenge — Dravida Cup — May 2026, Online. Open competition for cybersecurity enthusiasts.
- Past: Cybersecurity Orientation — October 2025, Davangere. Introductory session on cybersecurity careers.

STATS:
- 1000+ students trained
- 10+ events conducted
- 5+ colleges partnered
- 1 year active

BLOG (on Medium):
- Topics covered: OSINT tools & techniques, TryHackMe journey & walkthroughs, phishing evolution & defense.
- Read on Medium: https://medium.com/@anikettegginamath

=== BEHAVIOR RULES ===
- When users ask about courses or enrollment, provide the specific Topmate link and price.
- When users ask about services, describe the service and share the subpage link.
- When users ask about joining Cyber Dravida or volunteering, direct them to cyberdravida@gmail.com.
- When users ask about the founder, share Aniket's credentials and social links.
- When users ask about events, share upcoming event details.
- Always be helpful, accurate, and encourage users to explore cybersecurity.
- If you don't know something specific, say so and suggest contacting cyberdravida@gmail.com.
`;

const ALLOWED_ORIGINS = [
  "https://cyberdravida.in",
  "https://www.cyberdravida.in",
];

// Simple in-memory rate limiter (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, "");
}

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;

  const message = value as Record<string, unknown>;
  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string"
  );
}

function getCorsHeaders(origin: string | undefined) {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin as string | undefined;
  const cors = getCorsHeaders(origin);

  // Set CORS headers
  Object.entries(cors).forEach(([key, value]) => res.setHeader(key, value));

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Rate limiting
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Too many requests. Please wait a moment." });
  }

  // Validate body
  const { messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Invalid messages array" });
  }

  // Sanitize messages
  const sanitizedMessages = (messages as unknown[])
    .filter(isChatMessage)
    .map((message) => ({
      role: message.role,
      content: stripHtml(message.content).slice(0, 500),
    }));

  if (sanitizedMessages.length === 0) {
    return res.status(400).json({ error: "No valid messages" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 500,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...sanitizedMessages],
      }),
    });

    if (!groqRes.ok) {
      const errorText = await groqRes.text();
      console.error("Groq API error:", groqRes.status, errorText);
      return res.status(502).json({ error: "AI service error" });
    }

    const data = await groqRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
