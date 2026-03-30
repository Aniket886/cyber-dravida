import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSiteData } from "@/contexts/SiteDataContext";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Blog = () => {
  const { data } = useSiteData();
  const blog = data.blog;

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">{blog.heading}</h2>
          <p className="text-foreground/60 max-w-lg mx-auto">{blog.subheading}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {blog.posts.map((p, i) => (
            <motion.div key={p.title} {...fadeUp(0.1 + i * 0.1)}>
              <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                  <Badge className={p.tagClass}>{p.tag}</Badge>
                  <h3 className="font-heading font-semibold text-heading text-lg">{p.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed flex-1">{p.excerpt}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium inline-block hover:underline">
                    Read on Medium →
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs pt-2 border-t border-border">
                    <span>{p.author}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {p.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center mt-10" {...fadeUp(0.4)}>
          <Button variant="outline" asChild>
            <a href={blog.allPostsUrl} target="_blank" rel="noopener noreferrer">Read All Posts →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
