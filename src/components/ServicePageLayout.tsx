import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import type { ServicePageData } from "@/data/servicePages";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

interface Props {
  data: ServicePageData;
}

const ServicePageLayout = ({ data }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedGlossary = [...data.glossary].sort((a, b) =>
    a.term.localeCompare(b.term)
  );

  return (
    <div className="min-h-screen bg-background circuit-bg">
      {/* Back button */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <motion.div {...fadeUp(0)}>
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </motion.div>
      </div>

      {/* Hero */}
      <section className="py-16 sm:py-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="flex flex-col items-center text-center gap-4" {...fadeUp(0.1)}>
            <div className={`p-3 rounded-xl bg-muted w-fit ${data.color}`}>
              <data.icon size={32} />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading">
              {data.title}
            </h1>
            <p className="text-foreground/60 max-w-2xl text-base sm:text-lg leading-relaxed">
              {data.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabbed content */}
      <section className="pb-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0.2)}>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center bg-muted/50 h-auto p-1 gap-1">
                <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
                <TabsTrigger value="resources" className="text-xs sm:text-sm">Resources</TabsTrigger>
                <TabsTrigger value="roadmap" className="text-xs sm:text-sm">Roadmap</TabsTrigger>
                <TabsTrigger value="glossary" className="text-xs sm:text-sm">Glossary</TabsTrigger>
              </TabsList>

              {/* Overview */}
              <TabsContent value="overview" className="mt-8">
                <div className="space-y-8">
                  <div className="space-y-4">
                    {data.overview.map((para, i) => (
                      <p key={i} className="text-foreground/70 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div>
                    <h3 className="font-heading font-semibold text-heading text-lg mb-3">
                      Key Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {data.keyTopics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs sm:text-sm">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Card className="bg-card border-border">
                    <CardContent className="p-6">
                      <h3 className="font-heading font-semibold text-heading text-lg mb-2">
                        Who It's For
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {data.whoItsFor}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Resources */}
              <TabsContent value="resources" className="mt-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.resources.map((r) => (
                    <a
                      key={r.name}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full">
                        <CardContent className="p-5 space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-heading font-semibold text-heading text-sm sm:text-base">
                              {r.name}
                            </h4>
                            <ExternalLink size={14} className="text-muted-foreground" />
                          </div>
                          <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                            {r.description}
                          </p>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </TabsContent>

              {/* Roadmap */}
              <TabsContent value="roadmap" className="mt-8">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-border" />

                  <div className="space-y-6">
                    {data.roadmap.map((step, i) => (
                      <motion.div
                        key={step.title}
                        className="relative pl-12 sm:pl-14"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.4 }}
                      >
                        {/* Step number */}
                        <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-bold text-xs sm:text-sm">
                          {i + 1}
                        </div>
                        <Card className="bg-card border-border">
                          <CardContent className="p-4 sm:p-5">
                            <h4 className="font-heading font-semibold text-heading text-sm sm:text-base mb-1">
                              {step.title}
                            </h4>
                            <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Glossary */}
              <TabsContent value="glossary" className="mt-8">
                <Accordion type="single" collapsible className="w-full">
                  {sortedGlossary.map((item) => (
                    <AccordionItem key={item.term} value={item.term} className="border-border">
                      <AccordionTrigger className="text-heading font-heading text-sm sm:text-base hover:no-underline">
                        {item.term}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                        {item.definition}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-card border-border p-8 sm:p-12">
            <Quote size={32} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-foreground/70 italic max-w-xl mx-auto mb-6">
              Ready to start your journey? Join Cyber Dravida and learn from experienced mentors in a community-driven environment.
            </p>
            <Button asChild className="glow-btn">
              <Link to="/#contact">Get in Touch</Link>
            </Button>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
