import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const events = [
  {
    status: "Upcoming" as const,
    title: "Cyber Awareness Workshop",
    date: "April 2026",
    location: "GM University, Davangere",
    desc: "A hands-on workshop on phishing, social engineering, and safe browsing practices for college students.",
  },
  {
    status: "Upcoming" as const,
    title: "CTF Challenge — Dravida Cup",
    date: "May 2026",
    location: "Online",
    desc: "Cyber Dravida's flagship capture-the-flag competition open to all Karnataka students.",
  },
  {
    status: "Past" as const,
    title: "Cybersecurity Orientation",
    date: "October 2025",
    location: "Davangere",
    desc: "Launch event introducing Cyber Dravida's mission and programs to students across FCIT.",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Events = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">
            Events &amp; Programs
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Stay updated on our upcoming and past activities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((e, i) => (
            <motion.div key={e.title} {...fadeUp(0.1 + i * 0.1)}>
              <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full">
                <CardContent className="p-6 space-y-4">
                  <Badge
                    variant={e.status === "Upcoming" ? "default" : "secondary"}
                    className={
                      e.status === "Upcoming"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {e.status}
                  </Badge>

                  <h3 className="font-heading font-semibold text-heading text-lg">
                    {e.title}
                  </h3>

                  <div className="flex flex-col gap-1.5 text-sm text-foreground/60">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {e.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {e.location}
                    </span>
                  </div>

                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {e.desc}
                  </p>

                  <Button variant="outline" size="sm" className="mt-2">
                    Know More →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
