import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Flag, Search, ShieldAlert } from "lucide-react";

const MEDIUM_URL = "https://medium.com/@anikettegginamath";

const posts = [
  {
    number: "01",
    tag: "OSINT",
    title: "5 OSINT Tools Every Investigator Should Know",
    excerpt: "A practical look at open-source intelligence tools that help investigators collect, verify, and correlate public information.",
    icon: Search,
    tagClass: "border-cyan-500/20 bg-cyan-500/[0.08] text-cyan-300",
    accent: "text-cyan-300",
    cardClass: "border-cyan-500/25 bg-[linear-gradient(125deg,rgba(8,145,178,0.15),hsl(var(--card)/0.82)_55%,rgba(217,119,6,0.1))] hover:border-cyan-400/45",
    featured: true,
  },
  {
    number: "02",
    tag: "CTF / CAREER",
    title: "My TryHackMe Journey to Top 1% Global Ranking",
    excerpt: "The learning path, practice habits, and rooms that shaped a consistent cybersecurity journey.",
    icon: Flag,
    tagClass: "border-red-500/20 bg-red-500/[0.08] text-red-300",
    accent: "text-red-300",
    cardClass: "border-red-500/20 bg-[linear-gradient(125deg,rgba(127,29,29,0.13),hsl(var(--card)/0.82))] hover:border-red-400/40",
  },
  {
    number: "03",
    tag: "AWARENESS",
    title: "How Phishing Attacks Are Evolving in 2026",
    excerpt: "How AI-assisted impersonation and modern delivery methods are making phishing harder to recognize.",
    icon: ShieldAlert,
    tagClass: "border-amber-500/20 bg-amber-500/[0.08] text-amber-300",
    accent: "text-amber-300",
    cardClass: "border-amber-500/20 bg-[linear-gradient(125deg,rgba(146,64,14,0.12),hsl(var(--card)/0.82))] hover:border-amber-400/40",
  },
];

const Blog = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="blog" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-cyan-500/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-80 w-80 rounded-full bg-red-500/[0.04] blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto mb-10 flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">Field Notes</p>
            <h2 className="mt-3 bg-gradient-to-r from-cyan-300 via-heading to-red-300 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl">
              Research, practice, perspective.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/50 sm:text-base">
              Cybersecurity explainers, investigation workflows, and lessons from hands-on learning.
            </p>
          </div>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-500/25 bg-cyan-500/[0.08] px-5 py-3 font-heading text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/45 hover:bg-cyan-500/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Explore Publication
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:grid-rows-2">
          {posts.map((post, index) => {
            const Icon = post.icon;

            return (
              <motion.a
                key={post.title}
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex overflow-hidden rounded-2xl border p-6 shadow-[0_18px_55px_hsl(var(--background)/0.4)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_75px_hsl(var(--background)/0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:p-7 ${post.cardClass} ${post.featured ? "min-h-[27rem] lg:row-span-2" : "min-h-52"}`}
                aria-label={`Read ${post.title} on Medium`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/[0.025] blur-3xl transition-colors duration-500 group-hover:bg-white/[0.05]" />
                {post.featured && (
                  <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(34,211,238,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.7)_1px,transparent_1px)] [background-size:30px_30px]" />
                )}

                <div className="relative flex w-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <span className={`inline-flex rounded-full border px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${post.tagClass}`}>
                      {post.tag}
                    </span>
                    <span className="font-heading text-5xl font-bold leading-none text-white/[0.055]">{post.number}</span>
                  </div>

                  <div className={`mt-7 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] ${post.accent}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className={`mt-5 max-w-2xl font-heading font-bold leading-tight text-heading ${post.featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                    {post.title}
                  </h3>
                  <p className={`mt-3 max-w-2xl flex-1 leading-relaxed text-foreground/55 ${post.featured ? "text-sm sm:text-base" : "text-sm"}`}>
                    {post.excerpt}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                    <div>
                      <p className="font-mono text-[8px] uppercase tracking-[0.17em] text-foreground/25">Written by</p>
                      <p className="mt-1 text-xs font-medium text-foreground/55">Aniket Tegginamath</p>
                    </div>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${post.accent}`}>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
