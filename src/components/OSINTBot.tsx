import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  FileSearch,
  Fingerprint,
  Network,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: Fingerprint,
    title: "Identity & exposure",
    description: "Pivot across emails, usernames, phone numbers, breach records, and public profiles.",
  },
  {
    icon: Network,
    title: "Infrastructure & threat intel",
    description: "Inspect domains, IP addresses, archived pages, subdomains, URLs, and file reputation.",
  },
  {
    icon: ScanSearch,
    title: "Media forensics",
    description: "Review image and document metadata, reverse-search visuals, and support face-led research.",
  },
  {
    icon: FileSearch,
    title: "Cases & reports",
    description: "Group findings into investigations, attach evidence, add context, and generate PDF reports.",
  },
];

const workflow = [
  { step: "01", label: "Target input", detail: "Email, username, phone, domain or IP" },
  { step: "02", label: "Multi-source scan", detail: "Identity, breach, infrastructure and media tools" },
  { step: "03", label: "Correlated findings", detail: "Useful pivots gathered into one readable result" },
  { step: "04", label: "Case evidence", detail: "Notes, attachments and export-ready PDF reports" },
];

const OSINTBot = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="osint-bot"
      className="relative overflow-hidden border-y border-border py-20 sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_45%,hsl(var(--primary)/0.16),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,hsl(var(--secondary)/0.04)_48%,transparent_72%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          >
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary opacity-70 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              Cyber Dravida Tool
            </div>

            <h2 className="max-w-xl font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-5xl">
              One bot. Every investigative pivot.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Cyber Dravida OSINT Bot brings collection, correlation, evidence organization, and reporting into one Telegram workspace, helping investigators move from a lead to a documented finding with less tool-switching.
            </p>

            <div className="mt-9 border-t border-border">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b border-border py-4"
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.07,
                    ease: "easeOut",
                  }}
                >
                  <div className="mt-0.5 text-primary">
                    <capability.icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-heading sm:text-base">
                      {capability.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/55">
                      {capability.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="glow-btn w-full sm:w-auto">
                <a
                  href="https://t.me/emailosint_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Launch Cyber Dravida OSINT Bot on Telegram"
                >
                  Launch on Telegram
                  <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <div className="flex items-center gap-2 text-xs leading-relaxed text-foreground/50">
                <ShieldCheck className="h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                For lawful, ethical, and authorized investigations only.
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.12 }}
            aria-label="OSINT investigation workflow"
          >
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card/80 shadow-[0_30px_80px_hsl(var(--background)/0.7),0_0_40px_hsl(var(--primary)/0.08)] backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-border bg-background/50 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                  Investigation pipeline
                </span>
              </div>

              <div className="relative p-5 sm:p-8">
                {!reduceMotion && (
                  <motion.div
                    className="pointer-events-none absolute left-4 right-4 top-[8%] h-px bg-gradient-to-r from-transparent via-secondary/70 to-transparent shadow-[0_0_16px_hsl(var(--secondary)/0.55)]"
                    animate={{ top: ["8%", "90%", "8%"] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}

                <div className="absolute bottom-10 left-[2.45rem] top-10 w-px bg-gradient-to-b from-primary/10 via-primary/60 to-secondary/20 sm:left-[3.45rem]" />
                <div className="relative space-y-3">
                  {workflow.map((item, index) => (
                    <motion.div
                      key={item.step}
                      className="group grid grid-cols-[3rem_1fr] items-center gap-4 rounded-xl border border-transparent bg-background/45 p-3 transition-colors duration-300 hover:border-primary/30 hover:bg-background/70 sm:grid-cols-[3.5rem_1fr] sm:p-4"
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.45,
                        delay: reduceMotion ? 0 : 0.18 + index * 0.11,
                      }}
                    >
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/35 bg-card font-mono text-xs text-primary shadow-[0_0_18px_hsl(var(--primary)/0.15)]">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-heading text-sm font-semibold text-heading sm:text-base">
                          {item.label}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-foreground/50 sm:text-sm">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/35">
                  <span>Collect</span>
                  <span className="text-primary/70">Correlate</span>
                  <span>Document</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OSINTBot;
