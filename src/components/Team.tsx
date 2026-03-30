import { motion } from "framer-motion";
import { Terminal, Linkedin, Link as LinkIcon, type LucideIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useSiteData } from "@/contexts/SiteDataContext";

const iconMap: Record<string, LucideIcon> = { Terminal, Linkedin, Link: LinkIcon };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const Team = () => {
  const { data } = useSiteData();
  const team = data.team;

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-14" {...fadeUp()}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3">{team.heading}</h2>
          <p className="text-foreground/60 max-w-lg mx-auto">{team.subheading}</p>
        </motion.div>

        {team.members.map((member, mi) => (
          <motion.div key={mi} {...fadeUp(0.1)}>
            <Card className="max-w-3xl mx-auto bg-card border-border hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 mb-6">
              <CardContent className="p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <Avatar className="h-28 w-28 shrink-0">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-3xl font-heading font-bold text-primary-foreground">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="font-heading font-bold text-heading text-2xl">{member.name}</h3>
                    <Badge className="mt-2 bg-primary/20 text-primary border-primary/30">{member.role}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {member.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                    ))}
                  </div>

                  <p className="text-foreground/60 text-sm leading-relaxed">{member.bio}</p>

                  <div className="flex gap-3 justify-center md:justify-start">
                    {member.links.map((link) => {
                      const Icon = iconMap[link.icon] || LinkIcon;
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted text-foreground/60 hover:text-primary transition-colors"
                          aria-label={link.label}
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <motion.p className="text-center text-muted-foreground text-sm italic mt-10" {...fadeUp(0.2)}>
          {team.bottomText}{" "}
          <a href={`mailto:${team.bottomEmail}`} className="text-primary hover:underline">{team.bottomEmail}</a>
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
