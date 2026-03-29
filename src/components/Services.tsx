import { motion } from "framer-motion";
import { Zap, Radio, Flag, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    color: "text-secondary",
    title: "Cybersecurity Training",
    desc: "Structured courses covering ethical hacking, OSINT, network security, and digital forensics — from beginner to advanced.",
  },
  {
    icon: Radio,
    color: "text-primary",
    title: "Awareness Outreach",
    desc: "Campus workshops, seminars, and awareness drives to educate students and institutions about cyber threats.",
  },
  {
    icon: Flag,
    color: "text-destructive",
    title: "CTF Competitions",
    desc: "Participate in Capture the Flag challenges designed to sharpen your offensive and defensive security skills.",
  },
  {
    icon: Search,
    color: "text-secondary",
    title: "OSINT & Investigation",
    desc: "Learn open-source intelligence gathering and cyber crime investigation techniques used by real analysts.",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">
            What We Do
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Our programs are designed to take you from zero to security-ready.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div key={s.title} {...fadeUp(0.1 + i * 0.1)}>
              <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-3">
                  <div className={`p-2.5 rounded-lg bg-muted w-fit ${s.color}`}>
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-heading font-semibold text-heading text-lg">
                    {s.title}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                  <span className="text-primary text-sm font-medium inline-block">
                    Learn More →
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
