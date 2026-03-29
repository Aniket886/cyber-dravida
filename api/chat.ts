import type { VercelRequest, VercelResponse } from "@vercel/node";

const SYSTEM_PROMPT =
  "You are Dravida AI, the official AI assistant of Cyber Dravida — a Karnataka-based cybersecurity organization. You help users learn about cybersecurity, ethical hacking, OSINT, online safety, and Cyber Dravida's programs and events. Keep answers concise, friendly, and educational. If asked about joining Cyber Dravida, direct them to contact cyberdravida@gmail.com. Do not answer questions unrelated to cybersecurity or Cyber Dravida. Founder: Aniket Tegginamath.";

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
  const sanitizedMessages = messages
    .filter(
      (m: any) =>
        m &&
        typeof m.role === "string" &&
        typeof m.content === "string" &&
        ["user", "assistant"].includes(m.role)
    )
    .map((m: any) => ({
      role: m.role,
      content: stripHtml(m.content).slice(0, 500),
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
