import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MEDIUM_URL = "https://medium.com/@anikettegginamath";

const posts = [
  {
    tag: "OSINT",
    tagClass: "bg-secondary/20 text-secondary border-secondary/30",
    title: "5 OSINT Tools Every Investigator Should Know",
    excerpt:
      "Open-source intelligence is more powerful than most people realize. Here are the tools I use daily...",
  },
  {
    tag: "CTF",
    tagClass: "bg-primary/20 text-primary border-primary/30",
    title: "My TryHackMe Journey to Top 1% Global Ranking",
    excerpt:
      "Getting to the top 1% wasn't overnight. Here's my honest learning path and the rooms that changed everything...",
  },
  {
    tag: "Awareness",
    tagClass: "bg-destructive/20 text-destructive border-destructive/30",
    title: "How Phishing Attacks Are Evolving in 2026",
    excerpt:
      "Phishing isn't just dodgy emails anymore. AI-generated attacks are making it harder for anyone to stay safe...",
  },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">
            From the Blog
          </h2>
          <p className="text-foreground/60 max-w-lg mx-auto">
            Insights, writeups, and cybersecurity deep-dives.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((p, i) => (
            <motion.div key={p.title} {...fadeUp(0.1 + i * 0.1)}>
              <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                  <Badge className={p.tagClass}>{p.tag}</Badge>

                  <h3 className="font-heading font-semibold text-heading text-lg">
                    {p.title}
                  </h3>

                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">
                    {p.excerpt}
                  </p>

                  <a
                    href={MEDIUM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium inline-block hover:underline"
                  >
                    Read on Medium →
                  </a>

                  <div className="flex items-center gap-2 text-muted-foreground text-xs pt-2 border-t border-border">
                    <span>Aniket Tegginamath</span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> 5 min read
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-10" {...fadeUp(0.4)}>
          <Button variant="outline" asChild>
            <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
              Read All Posts →
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
