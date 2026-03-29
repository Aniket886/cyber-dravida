import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "+", label: "Events Conducted" },
  { value: 5, suffix: "+", label: "Colleges Reached" },
  { value: 1, suffix: "", label: "Year Active (Est. 2025)" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 60;
    const handle = () => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame < totalFrames) requestAnimationFrame(handle);
    };
    requestAnimationFrame(handle);
  }, [inView, target]);

  return count;
}

const StatCard = ({ value, suffix, label, inView }: { value: number; suffix: string; label: string; inView: boolean }) => {
  const count = useCountUp(value, inView);
  return (
    <div className="text-center px-6 py-4">
      <span className="text-4xl sm:text-5xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {count}{suffix}
      </span>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </div>
  );
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="stats" className="bg-[#0f0f16] relative">
      {/* Top divider */}
      <div className="h-px w-full bg-primary/30 shadow-[0_0_8px_hsl(var(--primary)/0.3)]" />

      <div className="container mx-auto px-4 py-20">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold font-heading text-center mb-14"
          {...fadeUp}
        >
          Our Impact So Far
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          {...fadeUp}
        >
          {stats.map((s) => (
            <StatCard key={s.label} {...s} inView={inView} />
          ))}
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-primary/30 shadow-[0_0_8px_hsl(var(--primary)/0.3)]" />
    </section>
  );
};

export default Stats;
