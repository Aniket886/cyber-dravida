import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Linkedin,
  Link as LinkIcon,
  Mail,
  MapPin,
  ShieldCheck,
  Terminal,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const credentials = ["CEH", "OSINT", "TryHackMe Top 1%", "CCI", "Ethical Hacking Mentor"];

const impact = [
  { value: "1000+", label: "People trained", icon: Users },
  { value: "Top 1%", label: "TryHackMe global rank", icon: Terminal },
  { value: "Karnataka", label: "Community focus", icon: MapPin },
];

const Team = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="team" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-red-500/[0.045] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-cyan-500/[0.055] blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">
            People Behind the Mission
          </p>
          <h2 className="mt-4 bg-gradient-to-r from-red-300 via-heading to-cyan-300 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            Meet the Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/55 sm:text-base">
            Practitioner-led cybersecurity education, investigation, and community building from Karnataka.
          </p>
        </motion.div>

        <motion.article
          className="group relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-red-500/30 bg-[linear-gradient(118deg,rgba(127,29,29,0.14),hsl(var(--card)/0.82)_43%,rgba(8,145,178,0.13))] shadow-[0_28px_90px_hsl(var(--background)/0.65),-12px_0_45px_rgba(239,68,68,0.07),12px_0_45px_rgba(6,182,212,0.08)] backdrop-blur-xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-red-500/35" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 rounded-r-[inherit] border-y border-r border-cyan-500/40" />
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-slate-200/35 to-cyan-400" />
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:30px_30px]" />

          <div className="relative grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="relative flex min-h-80 items-center justify-center overflow-hidden border-b border-white/[0.07] p-8 lg:min-h-[36rem] lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(6,182,212,0.13),transparent_38%),linear-gradient(155deg,rgba(127,29,29,0.12),transparent_55%)]" />
              <div className="absolute left-8 top-8 font-mono text-[9px] uppercase tracking-[0.2em] text-red-300/55">
                Founder Profile / 01
              </div>
              <div className="absolute bottom-8 right-8 h-16 w-16 border-b border-r border-cyan-400/30" />
              <div className="absolute left-8 top-8 h-16 w-16 border-l border-t border-red-400/30" />

              <div className="relative">
                <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-red-500/20 via-transparent to-cyan-500/25 blur-xl" />
                <div className="relative rounded-full bg-gradient-to-br from-red-500 via-slate-200/40 to-cyan-400 p-[2px] shadow-[0_18px_55px_rgba(6,182,212,0.15)]">
                  <Avatar className="h-44 w-44 border-4 border-background sm:h-56 sm:w-56 lg:h-64 lg:w-64">
                    <AvatarImage src="/team/aniket.png" alt="Aniket Tegginamath" className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-red-600 to-cyan-600 font-heading text-4xl font-bold text-white">
                      AT
                    </AvatarFallback>
                  </Avatar>
                </div>
                <span className="absolute bottom-4 right-5 flex h-5 w-5 items-center justify-center rounded-full border-4 border-background bg-emerald-400" aria-label="Active founder" />
              </div>
            </div>

            <div className="relative flex flex-col p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge className="border border-cyan-500/25 bg-cyan-500/10 text-cyan-300">
                    Founder &amp; Lead Researcher
                  </Badge>
                  <h3 className="mt-4 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
                    Aniket Tegginamath
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/35">
                    Researcher / Mentor / Community Builder
                  </p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.07] text-red-300">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {credentials.map((credential, index) => (
                  <span
                    key={credential}
                    className={`rounded-full border px-3 py-1 font-mono text-[10px] font-medium ${
                      index % 2 === 0
                        ? "border-red-500/15 bg-red-500/[0.065] text-red-200/65"
                        : "border-cyan-500/15 bg-cyan-500/[0.065] text-cyan-200/65"
                    }`}
                  >
                    {credential}
                  </span>
                ))}
              </div>

              <p className="mt-7 max-w-3xl text-sm leading-7 text-foreground/60 sm:text-base">
                Aniket is a cybersecurity researcher, ethical hacking mentor, and founder of Cyber Dravida. His work spans OSINT, dark-web investigation, cybercrime analysis, and practical security education. He has trained more than 1,000 people and ranks in the top 1% globally on TryHackMe.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                {impact.map(({ value, label, icon: Icon }) => (
                  <div key={label} className="bg-background/55 p-4 sm:p-5">
                    <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    <p className="mt-3 font-heading text-xl font-bold text-heading">{value}</p>
                    <p className="mt-1 text-xs text-foreground/40">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <a
                  href="https://tryhackme.com/p/D4rkMatrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-red-500/25 bg-red-500/[0.08] px-4 py-3 font-heading text-sm font-semibold text-red-200 transition hover:border-red-400/45 hover:bg-red-500/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                  <Terminal className="h-4 w-4" aria-hidden="true" />
                  TryHackMe Profile
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aniket-tegginamath/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 font-heading text-sm font-bold text-slate-950 shadow-[0_10px_30px_rgba(6,182,212,0.16)] transition hover:from-cyan-400 hover:to-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  Connect on LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://linktr.ee/anikettegginamath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-heading text-sm font-semibold text-foreground/70 transition hover:border-cyan-500/25 hover:bg-cyan-500/[0.07] hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:col-span-2 xl:col-span-1"
                >
                  <LinkIcon className="h-4 w-4" aria-hidden="true" />
                  More Profiles
                  <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          className="mx-auto mt-8 flex max-w-6xl flex-col gap-5 rounded-2xl border border-white/[0.08] bg-card/45 p-5 backdrop-blur-lg sm:flex-row sm:items-center sm:justify-between sm:p-6"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.16, ease: "easeOut" }}
        >
          <div>
            <p className="font-heading text-base font-semibold text-heading">Build with Cyber Dravida</p>
            <p className="mt-1 text-sm text-foreground/45">We are growing our community of educators, researchers, and contributors.</p>
          </div>
          <a
            href="mailto:cyberdravida@gmail.com?subject=Contributing%20to%20Cyber%20Dravida"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-500/25 bg-cyan-500/[0.08] px-5 py-3 font-heading text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/45 hover:bg-cyan-500/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contribute to the Mission
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
