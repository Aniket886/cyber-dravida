import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  BadgeIndianRupee,
  BookOpen,
  CircleCheckBig,
  CreditCard,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface PurchaseStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const purchaseSteps: PurchaseStep[] = [
  {
    number: "01",
    title: "Choose the Course",
    description: "Review the Ethical Hacking course details, curriculum, language, and learning format.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Claim the Offer",
    description: "Select early-bird access while the limited promotional offer is active.",
    icon: BadgeIndianRupee,
  },
  {
    number: "03",
    title: "Complete Payment",
    description: "Enter the required details and complete your payment securely through Topmate.",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "Access the Course",
    description: "Follow the Topmate confirmation instructions. Contact Cyber Dravida if access details do not arrive.",
    icon: CircleCheckBig,
  },
];

const PurchaseGuide = () => {
  const reduceMotion = useReducedMotion();

  const scrollToCourses = () => {
    const courses = document.getElementById("courses");
    if (!courses) return;

    const top = courses.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section id="purchase-guide" className="relative overflow-hidden border-b border-border py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--secondary)/0.1),transparent_32%),radial-gradient(circle_at_82%_42%,hsl(var(--primary)/0.13),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_15%,hsl(var(--background)/0.35)_50%,transparent_82%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.34em] text-secondary">
            Step-by-step guide
          </p>
          <h2 className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
            How to Purchase the Course
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-foreground/60 sm:text-base">
            Watch the Kannada and English walkthrough and follow these steps to enroll in the Ethical Hacking course.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="relative space-y-4">
              <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-secondary/70 via-primary/55 to-primary/10" />
              {purchaseSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    className="relative grid grid-cols-[3rem_1fr] gap-4"
                    initial={{ opacity: 0, x: -22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.65 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.42,
                      delay: reduceMotion ? 0 : index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-secondary/40 bg-background text-secondary shadow-[0_0_20px_hsl(var(--secondary)/0.14)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 font-mono text-[9px] font-bold text-secondary-foreground">
                        {step.number}
                      </span>
                    </div>
                    <div className="rounded-xl border border-border bg-card/55 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-secondary/35">
                      <h3 className="font-heading text-base font-semibold text-heading sm:text-lg">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/55">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8 pl-0 sm:pl-16"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.25 }}
            >
              <Button type="button" size="lg" className="glow-btn w-full sm:w-auto" onClick={scrollToCourses}>
                View Course &amp; Enroll
                <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="w-full lg:sticky lg:top-24"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.12, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-secondary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-secondary/35 bg-card shadow-[0_24px_70px_hsl(var(--background)/0.75),0_0_32px_hsl(var(--secondary)/0.1)]">
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/CiSi-vvJbKk?rel=0"
                    title="How to Buy Ethical Hacking Course in Kannada and English"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                Purchase walkthrough · Kannada + English
              </p>
              <a
                href="https://www.youtube.com/watch?v=CiSi-vvJbKk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Watch on YouTube
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseGuide;
