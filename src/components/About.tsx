import { motion } from "framer-motion";
import { Shield, BookOpen, Users, Globe } from "lucide-react";

const features = [
  { icon: Shield, label: "Awareness First", desc: "Making digital safety a habit, not an afterthought." },
  { icon: BookOpen, label: "Practical Training", desc: "Hands-on labs, CTF challenges, and real-world scenarios." },
  { icon: Users, label: "Community Driven", desc: "Built by students, for students." },
  { icon: Globe, label: "Karnataka Focused", desc: "Local impact, national vision." },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">
            About Cyber Dravida
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left — description card */}
          <motion.div
            className="bg-card border border-border rounded-card p-6 border-l-2 border-l-secondary space-y-4"
            {...fadeUp(0.1)}
          >
            <p className="text-foreground/80 leading-relaxed">
              Cyber Dravida is a Karnataka-based cybersecurity organization founded in September 2025. We exist to close the cybersecurity awareness gap in Tier-2 India by training students, conducting outreach programs, and building a community of future security professionals.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Founded by Aniket Tegginamath (TryHackMe Top 1%, CEH, OSINT Researcher), Cyber Dravida operates across colleges and institutions in Karnataka with a mission to make cybersecurity accessible to everyone.
            </p>
          </motion.div>

          {/* Right — feature list */}
          <div className="space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                className="flex items-start gap-4"
                {...fadeUp(0.15 + i * 0.1)}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <f.icon size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-heading text-sm mb-0.5">
                    {f.label}
                  </h4>
                  <p className="text-foreground/60 text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
