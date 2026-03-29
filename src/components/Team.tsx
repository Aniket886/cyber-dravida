import { motion } from "framer-motion";
import { Terminal, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const tags = ["CEH", "OSINT", "TryHackMe Top 1%", "CCI", "Ethical Hacking Mentor"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp()}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">
            Meet the Team
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            The people behind Cyber Dravida.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)}>
          <Card className="max-w-3xl mx-auto bg-card border-border hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300">
            <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <Avatar className="h-28 w-28 shrink-0">
                <AvatarImage src="/team/aniket.png" alt="Aniket Tegginamath" />
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-3xl font-heading font-bold text-primary-foreground">
                  AT
                </AvatarFallback>
              </Avatar>

              <div className="space-y-4 text-center md:text-left">
                <div>
                  <h3 className="font-heading font-bold text-heading text-2xl">
                    Aniket Tegginamath
                  </h3>
                  <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">
                    Founder &amp; Lead Researcher
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-foreground/60 text-sm leading-relaxed">
                  Aniket is a cybersecurity researcher, ethical hacking mentor, and
                  founder of Cyber Dravida. With experience in OSINT, dark web
                  investigation, and cyber crime analysis, he has trained 500+
                  individuals and is ranked in the top 1% globally on TryHackMe.
                </p>

                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="https://tryhackme.com/p/D4rkMatrix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted text-foreground/60 hover:text-primary transition-colors"
                    aria-label="TryHackMe"
                  >
                    <Terminal size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aniket-tegginamath/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted text-foreground/60 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          className="text-center text-muted-foreground text-sm italic mt-10"
          {...fadeUp(0.2)}
        >
          We're growing. Interested in contributing? Reach out at{" "}
          <a
            href="mailto:cyberdravida@gmail.com"
            className="text-primary hover:underline"
          >
            cyberdravida@gmail.com
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
