import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Flag, Radio, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: Zap,
    title: "Cybersecurity Training",
    slug: "cybersecurity-training",
    label: "Learn / Practice",
    desc: "Structured courses in ethical hacking, OSINT, network security, and digital forensics - from first principles to practical capability.",
    cardClass:
      "border-red-500/25 bg-[linear-gradient(120deg,rgba(127,29,29,0.16),hsl(var(--card)/0.8)_48%,rgba(30,64,175,0.14))] hover:border-red-400/45 hover:shadow-[0_24px_70px_rgba(30,64,175,0.15)]",
    lineClass: "from-red-500 via-slate-300/35 to-blue-500",
    glowClass: "bg-red-500/10 group-hover:bg-red-500/[0.16]",
    iconClass: "border-red-500/25 bg-red-500/10 text-red-300 group-hover:border-blue-500/35 group-hover:bg-blue-500/10 group-hover:text-blue-300",
    labelClass: "text-red-300/70",
    actionClass: "text-blue-300",
  },
  {
    number: "02",
    icon: Radio,
    title: "Awareness Outreach",
    slug: "awareness-outreach",
    label: "Educate / Protect",
    desc: "Campus workshops, seminars, and awareness programs that turn cyber-risk knowledge into safer everyday behaviour.",
    cardClass:
      "border-amber-500/25 bg-[linear-gradient(120deg,rgba(146,64,14,0.14),hsl(var(--card)/0.8)_48%,rgba(8,145,178,0.12))] hover:border-amber-400/45 hover:shadow-[0_24px_70px_rgba(8,145,178,0.13)]",
    lineClass: "from-amber-400 via-yellow-200/35 to-cyan-400",
    glowClass: "bg-amber-500/[0.09] group-hover:bg-amber-500/[0.15]",
    iconClass: "border-amber-500/25 bg-amber-500/10 text-amber-300 group-hover:border-cyan-500/35 group-hover:bg-cyan-500/10 group-hover:text-cyan-300",
    labelClass: "text-amber-300/70",
    actionClass: "text-cyan-300",
  },
  {
    number: "03",
    icon: Flag,
    title: "CTF Competitions",
    slug: "ctf-competitions",
    label: "Attack / Defend",
    desc: "Capture the Flag challenges built to sharpen offensive thinking, defensive response, teamwork, and technical problem solving.",
    cardClass:
      "border-rose-500/25 bg-[linear-gradient(120deg,rgba(159,18,57,0.14),hsl(var(--card)/0.8)_48%,rgba(14,116,144,0.13))] hover:border-rose-400/45 hover:shadow-[0_24px_70px_rgba(225,29,72,0.12)]",
    lineClass: "from-rose-500 via-fuchsia-300/30 to-cyan-400",
    glowClass: "bg-rose-500/[0.09] group-hover:bg-rose-500/[0.15]",
    iconClass: "border-rose-500/25 bg-rose-500/10 text-rose-300 group-hover:border-cyan-500/35 group-hover:bg-cyan-500/10 group-hover:text-cyan-300",
    labelClass: "text-rose-300/70",
    actionClass: "text-cyan-300",
  },
  {
    number: "04",
    icon: Search,
    title: "OSINT & Investigation",
    slug: "osint-investigation",
    label: "Collect / Correlate",
    desc: "Open-source intelligence and cybercrime investigation workflows that transform public data into documented findings.",
    cardClass:
      "border-cyan-500/25 bg-[linear-gradient(120deg,rgba(8,145,178,0.14),hsl(var(--card)/0.8)_48%,rgba(217,119,6,0.12))] hover:border-cyan-400/45 hover:shadow-[0_24px_70px_rgba(6,182,212,0.14)]",
    lineClass: "from-cyan-400 via-teal-300/35 to-amber-400",
    glowClass: "bg-cyan-500/[0.09] group-hover:bg-cyan-500/[0.15]",
    iconClass: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300 group-hover:border-amber-500/35 group-hover:bg-amber-500/10 group-hover:text-amber-300",
    labelClass: "text-cyan-300/70",
    actionClass: "text-amber-300",
  },
];

const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute left-[8%] top-20 h-72 w-72 rounded-full bg-red-500/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-[8%] h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">
            Cyber Dravida Capabilities
          </p>
          <h2 className="mt-4 bg-gradient-to-r from-red-300 via-heading to-cyan-300 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            Learn. Investigate. Defend.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground/55 sm:text-base">
            Four connected programs designed to build security awareness, practical skill, investigative thinking, and community resilience.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className={`group relative flex h-full min-h-64 overflow-hidden rounded-2xl border p-6 shadow-[0_18px_55px_hsl(var(--background)/0.4)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:p-7 ${service.cardClass}`}
                  aria-label={`Explore ${service.title}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${service.lineClass}`} />
                  <div className={`absolute -right-16 -top-20 h-56 w-56 rounded-full blur-3xl transition-colors duration-500 ${service.glowClass}`} />
                  <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:28px_28px]" />

                  <div className="relative flex w-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-500 ${service.iconClass}`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="font-heading text-5xl font-bold leading-none text-white/[0.055] transition-colors duration-500 group-hover:text-white/[0.09]">
                        {service.number}
                      </span>
                    </div>

                    <div className="mt-8 flex-1">
                      <p className={`font-mono text-[9px] font-semibold uppercase tracking-[0.22em] ${service.labelClass}`}>
                        {service.label}
                      </p>
                      <h3 className="mt-2 font-heading text-xl font-bold text-heading sm:text-2xl">{service.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/55">{service.desc}</p>
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                      <span className={`font-heading text-sm font-semibold ${service.actionClass}`}>Explore capability</span>
                      <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${service.actionClass}`}>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
