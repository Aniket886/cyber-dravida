import { motion } from "framer-motion";
import { Zap, Radio, Flag, Search, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useSiteData } from "@/contexts/SiteDataContext";

const iconMap: Record<string, LucideIcon> = { Zap, Radio, Flag, Search };

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Services = () => {
  const { data } = useSiteData();
  const services = data.services;

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">{services.heading}</h2>
          <p className="text-foreground/60 max-w-lg mx-auto">{services.subheading}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.items.map((s, i) => {
            const Icon = iconMap[s.icon] || Zap;
            return (
              <motion.div key={s.title} {...fadeUp(0.1 + i * 0.1)}>
                <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-3">
                    <div className={`p-2.5 rounded-lg bg-muted w-fit ${s.color}`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-semibold text-heading text-lg">{s.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
                    <Link to={`/services/${s.slug}`} className="text-primary text-sm font-medium inline-block hover:underline">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
