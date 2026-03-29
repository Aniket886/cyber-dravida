import { motion, type Easing } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as Easing },
});

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 3,
  opacity: Math.random() * 0.4 + 0.1,
}));

const Hero = () => {
  const memoParticles = useMemo(() => particles, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {memoParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            initial={{ opacity: p.opacity }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <img
            src="/CDTRANS.png"
            alt="Cyber Dravida"
            className="h-24 w-24 object-contain mx-auto"
            style={{ filter: "drop-shadow(0 0 18px rgba(99,102,241,0.5))" }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div {...fadeUp(0)}>
          <Badge
            variant="outline"
            className="mb-6 border-l-2 border-l-secondary border-y-border border-r-border bg-card/60 text-foreground px-4 py-1.5 text-xs tracking-wide"
          >
            Karnataka's Cybersecurity Community
          </Badge>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          {...fadeUp(0.15)}
        >
          <span className="text-heading">Where Curiosity</span>
          <br />
          <span className="bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
            Meets Cybersecurity.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed"
          {...fadeUp(0.3)}
        >
          Cyber Dravida is a student-led cybersecurity organization focused on
          training, awareness, and building a security-first mindset across
          Karnataka.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          {...fadeUp(0.45)}
        >
          <Button
            size="lg"
            className="glow-btn text-base px-8"
            onClick={() => scrollTo("services")}
          >
            Explore Programs
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 border-border hover:bg-card"
            onClick={() => scrollTo("team")}
          >
            Meet the Team
          </Button>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          {...fadeUp(0.6)}
        >
          {["500+ Trained", "Karnataka Based", "Est. 2025"].map((stat) => (
            <span
              key={stat}
              className="bg-card/60 border border-border text-foreground/60 text-xs px-4 py-1.5 rounded-full"
            >
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
