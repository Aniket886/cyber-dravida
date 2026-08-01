import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2, CalendarCheck2, GraduationCap, MapPin } from "lucide-react";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "People Trained",
    detail: "Students and learners reached through courses, workshops, and awareness programs.",
    icon: GraduationCap,
    accent: "text-red-300",
    iconClass: "border-red-500/20 bg-red-500/[0.08] text-red-300",
  },
  {
    value: 10,
    suffix: "+",
    label: "Events Conducted",
    detail: "Workshops, orientations, and practical cybersecurity sessions.",
    icon: CalendarCheck2,
    accent: "text-blue-300",
    iconClass: "border-blue-500/20 bg-blue-500/[0.08] text-blue-300",
  },
  {
    value: 5,
    suffix: "+",
    label: "Colleges Reached",
    detail: "Institutional partnerships supporting local cyber awareness.",
    icon: Building2,
    accent: "text-cyan-300",
    iconClass: "border-cyan-500/20 bg-cyan-500/[0.08] text-cyan-300",
  },
  {
    value: 2025,
    suffix: "",
    label: "Established",
    detail: "Building a security-first community from Karnataka, India.",
    icon: MapPin,
    accent: "text-amber-300",
    iconClass: "border-amber-500/20 bg-amber-500/[0.08] text-amber-300",
    staticValue: true,
  },
];

function useCountUp(target: number, inView: boolean, reduceMotion: boolean) {
  const [count, setCount] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCount(target);
      return;
    }

    let frame = 0;
    let animationFrame = 0;
    const totalFrames = 55;
    const handle = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame < totalFrames) animationFrame = requestAnimationFrame(handle);
    };
    animationFrame = requestAnimationFrame(handle);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, reduceMotion, target]);

  return count;
}

const ImpactMetric = ({ stat, inView, reduceMotion }: { stat: (typeof stats)[number]; inView: boolean; reduceMotion: boolean }) => {
  const count = useCountUp(stat.value, inView, reduceMotion || Boolean(stat.staticValue));
  const Icon = stat.icon;

  return (
    <div className="group relative flex min-h-56 flex-col bg-background/55 p-5 transition-colors duration-300 hover:bg-white/[0.045] sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${stat.iconClass}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/25">Verified impact</span>
      </div>
      <div className="mt-7">
        <p className={`font-heading text-4xl font-bold tracking-tight sm:text-5xl ${stat.accent}`}>
          {stat.staticValue ? String(stat.value) : count.toLocaleString("en-IN")}{stat.suffix}
        </p>
        <h3 className="mt-2 font-heading text-base font-semibold text-heading">{stat.label}</h3>
        <p className="mt-2 text-xs leading-relaxed text-foreground/45 sm:text-sm">{stat.detail}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = Boolean(useReducedMotion());

  return (
    <section id="stats" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-500/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto mb-10 flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">Measured Impact</p>
            <h2 className="mt-3 bg-gradient-to-r from-red-300 via-heading to-cyan-300 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl">
              Progress built in public.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/50 sm:text-base">
              Community outcomes created through practical training, institutional outreach, and accessible cybersecurity education.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-cyan-500/25 bg-cyan-500/[0.08] px-5 py-3 font-heading text-sm font-semibold text-cyan-300 transition hover:border-cyan-400/45 hover:bg-cyan-500/[0.13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Partner With Us
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <motion.div
          ref={ref}
          className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] shadow-[0_24px_75px_hsl(var(--background)/0.5)] sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
        >
          {stats.map((stat) => (
            <ImpactMetric key={stat.label} stat={stat} inView={inView} reduceMotion={reduceMotion} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
