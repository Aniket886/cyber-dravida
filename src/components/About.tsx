import { motion } from "framer-motion";
import { Shield, BookOpen, Users, Globe, type LucideIcon } from "lucide-react";
import { useSiteData } from "@/contexts/SiteDataContext";

const iconMap: Record<string, LucideIcon> = { Shield, BookOpen, Users, Globe };

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const About = () => {
  const { data } = useSiteData();
  const about = data.about;

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">
            {about.heading}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            className="bg-card border border-border rounded-card p-6 border-l-2 border-l-secondary space-y-4"
            {...fadeUp(0.1)}
          >
            <p className="text-foreground/80 leading-relaxed">{about.paragraph1}</p>
            <p className="text-foreground/80 leading-relaxed">{about.paragraph2}</p>
          </motion.div>

          <div className="space-y-5">
            {about.features.map((f, i) => {
              const Icon = iconMap[f.icon] || Shield;
              return (
                <motion.div key={f.label} className="flex items-start gap-4" {...fadeUp(0.15 + i * 0.1)}>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-heading text-sm mb-0.5">{f.label}</h4>
                    <p className="text-foreground/60 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
