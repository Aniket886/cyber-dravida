import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Flag, MapPin, Radio, ShieldCheck } from "lucide-react";

const events = [
  {
    number: "01",
    status: "2026 Program",
    title: "Cyber Awareness Workshop",
    date: "April 2026",
    location: "GM University, Davangere",
    desc: "A practical campus format covering phishing, social engineering, safer browsing, and everyday digital-risk decisions.",
    action: "Host a Workshop",
    subject: "Host a Cyber Awareness Workshop",
    icon: Radio,
    accent: "text-amber-300",
    badgeClass: "border-amber-500/20 bg-amber-500/[0.08] text-amber-300",
    cardClass: "border-amber-500/20 hover:border-amber-400/40",
  },
  {
    number: "02",
    status: "2026 Program",
    title: "CTF Challenge - Dravida Cup",
    date: "May 2026",
    location: "Online",
    desc: "A Capture the Flag format for Karnataka students to practise technical problem solving, attack thinking, and defensive response.",
    action: "Bring CTF to Campus",
    subject: "Bring a Cyber Dravida CTF to Our Campus",
    icon: Flag,
    accent: "text-red-300",
    badgeClass: "border-red-500/20 bg-red-500/[0.08] text-red-300",
    cardClass: "border-red-500/20 hover:border-red-400/40",
  },
  {
    number: "03",
    status: "Past Program",
    title: "Cybersecurity Orientation",
    date: "October 2025",
    location: "Davangere",
    desc: "The launch orientation that introduced Cyber Dravida's mission, learning pathways, and cybersecurity opportunities to FCIT students.",
    action: "Plan an Orientation",
    subject: "Plan a Cybersecurity Orientation",
    icon: ShieldCheck,
    accent: "text-cyan-300",
    badgeClass: "border-cyan-500/20 bg-cyan-500/[0.08] text-cyan-300",
    cardClass: "border-cyan-500/20 hover:border-cyan-400/40",
  },
];

const Events = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="events" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">Campus Programs</p>
          <h2 className="mt-3 bg-gradient-to-r from-amber-300 via-heading to-cyan-300 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl">
            Events designed for participation.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/50 sm:text-base">
            Bring practical cyber awareness, orientation, or competitive learning formats to your institution.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
          {events.map((event, index) => {
            const Icon = event.icon;
            const emailHref = `mailto:cyberdravida@gmail.com?subject=${encodeURIComponent(event.subject)}`;

            return (
              <motion.article
                key={event.title}
                className={`group relative flex min-h-[25rem] flex-col overflow-hidden rounded-2xl border bg-card/65 p-6 shadow-[0_18px_55px_hsl(var(--background)/0.4)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_75px_hsl(var(--background)/0.6)] ${event.cardClass}`}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/[0.025] blur-3xl transition-colors duration-500 group-hover:bg-white/[0.045]" />

                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`inline-flex rounded-full border px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] ${event.badgeClass}`}>
                      {event.status}
                    </span>
                    <span className="font-heading text-5xl font-bold leading-none text-white/[0.055]">{event.number}</span>
                  </div>

                  <div className="mt-7 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
                    <Icon className={`h-5 w-5 ${event.accent}`} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold leading-tight text-heading">{event.title}</h3>

                  <div className="mt-5 space-y-2 border-y border-white/[0.07] py-4 text-xs text-foreground/50 sm:text-sm">
                    <span className="flex items-center gap-2">
                      <CalendarDays className={`h-4 w-4 ${event.accent}`} aria-hidden="true" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className={`h-4 w-4 ${event.accent}`} aria-hidden="true" />
                      {event.location}
                    </span>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-relaxed text-foreground/55">{event.desc}</p>
                  <a
                    href={emailHref}
                    className={`mt-6 inline-flex min-h-11 items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 font-heading text-sm font-semibold transition hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${event.accent}`}
                  >
                    {event.action}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
