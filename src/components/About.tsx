import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Globe,
  MapPin,
  Shield,
  Target,
  Users,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Shield,
    label: "Awareness First",
    desc: "Turn digital safety from an afterthought into an everyday habit.",
    color: "text-red-300",
    iconClass: "border-red-500/20 bg-red-500/[0.08] text-red-300",
  },
  {
    number: "02",
    icon: BookOpen,
    label: "Practical Training",
    desc: "Build capability through guided labs, CTF challenges, and real scenarios.",
    color: "text-blue-300",
    iconClass: "border-blue-500/20 bg-blue-500/[0.08] text-blue-300",
  },
  {
    number: "03",
    icon: Users,
    label: "Community Driven",
    desc: "Create accessible learning pathways built with students and practitioners.",
    color: "text-cyan-300",
    iconClass: "border-cyan-500/20 bg-cyan-500/[0.08] text-cyan-300",
  },
  {
    number: "04",
    icon: Globe,
    label: "Karnataka Focused",
    desc: "Deliver local impact with a long-term national vision for cyber resilience.",
    color: "text-amber-300",
    iconClass: "border-amber-500/20 bg-amber-500/[0.08] text-amber-300",
  },
];

const organizationFacts = [
  { icon: CalendarDays, label: "Founded", value: "September 2025" },
  { icon: MapPin, label: "Based in", value: "Karnataka, India" },
  { icon: Target, label: "Primary focus", value: "Tier-2 cyber awareness" },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-red-500/[0.045] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">Who We Are</p>
          <h2 className="mt-4 bg-gradient-to-r from-red-300 via-heading to-cyan-300 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            About Cyber Dravida
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/55 sm:text-base">
            A Karnataka-born cybersecurity organization making practical security knowledge accessible beyond major technology hubs.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-red-500/25 bg-[linear-gradient(118deg,rgba(127,29,29,0.12),hsl(var(--card)/0.82)_45%,rgba(8,145,178,0.12))] shadow-[0_28px_90px_hsl(var(--background)/0.62),-12px_0_45px_rgba(239,68,68,0.06),12px_0_45px_rgba(6,182,212,0.07)] backdrop-blur-xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-red-500/30" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 rounded-r-[inherit] border-y border-r border-cyan-500/35" />
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-slate-200/30 to-cyan-400" />
          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:30px_30px]" />

          <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="border-b border-white/[0.08] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.08] text-red-300">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-300/60">Our Mission</p>
                  <p className="mt-1 text-xs text-foreground/35">Security knowledge without geographic barriers</p>
                </div>
              </div>

              <h3 className="mt-7 max-w-2xl font-heading text-2xl font-bold leading-tight text-heading sm:text-3xl lg:text-4xl">
                Closing the cybersecurity awareness gap in Tier-2 India.
              </h3>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground/60 sm:text-base">
                Cyber Dravida trains students, conducts institutional outreach, and builds communities of future security professionals. Our work connects foundational awareness with hands-on learning so participants can understand threats, investigate responsibly, and defend with confidence.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground/55 sm:text-base">
                Founded by Aniket Tegginamath, a TryHackMe Top 1% practitioner, CEH, and OSINT researcher, the organization works across colleges and institutions in Karnataka to make cybersecurity education practical and accessible.
              </p>

              <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-3">
                {organizationFacts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-background/55 p-4 sm:p-5">
                    <Icon className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                    <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/30">{label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground/75">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-6 py-3 font-heading text-sm font-bold text-white shadow-[0_10px_30px_rgba(37,99,235,0.17)] transition hover:from-red-500 hover:to-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  Explore Our Programs
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#team"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-cyan-500/25 bg-cyan-500/[0.08] px-6 py-3 font-heading text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/45 hover:bg-cyan-500/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Meet the Founder
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
              <div className="mb-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/60">How We Operate</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-heading sm:text-2xl">Four Operating Principles</h3>
              </div>

              <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;

                  return (
                    <motion.div
                      key={principle.label}
                      className="group flex gap-4 py-5 sm:gap-5"
                      initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.14 + index * 0.07, ease: "easeOut" }}
                    >
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:-translate-y-0.5 ${principle.iconClass}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h4 className="font-heading text-base font-semibold text-heading">{principle.label}</h4>
                          <span className={`font-mono text-[10px] font-semibold ${principle.color}`}>{principle.number}</span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-foreground/50">{principle.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-2xl border border-cyan-500/15 bg-cyan-500/[0.045] p-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan-300/60">Our Direction</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                  Build local cyber resilience today, then scale proven education and investigation practices across India.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
