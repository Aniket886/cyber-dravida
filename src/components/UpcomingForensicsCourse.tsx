import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Fingerprint,
  Laptop,
  Radio,
  Scale,
  Search,
  ShieldAlert,
  Sparkles,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const eligibility = [
  "Open to students, professionals, and cyber enthusiasts.",
  "Basic knowledge of computers and networking is recommended, but not mandatory.",
  "Suitable for candidates pursuing or holding BCA, B.Tech, B.Sc (IT/CS), MCA, or Cyber Security qualifications.",
];

const requirements = [
  "A Windows or Linux-based PC or laptop with internet access.",
  "A minimum of 4 GB RAM is recommended for forensic tools.",
  "A stable internet connection for live sessions and downloads.",
  "Willingness to learn and participate actively in live discussions.",
];

const disclaimer = [
  "This course is strictly for educational and research purposes only.",
  "All tools and techniques taught during the program are intended to be used ethically and legally for investigation, security testing, and academic study.",
  "Cyber Octopus Pvt. Ltd. and its trainers are not responsible for any misuse of the tools or knowledge shared during the program.",
];

const UpcomingForensicsCourse = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          className="group relative w-full rounded-[1.4rem] bg-gradient-to-br from-secondary/60 via-primary/30 to-border p-px text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          aria-label="View details for Cyber Forensics Investigation five-week course"
        >
          <div className="relative overflow-hidden rounded-[calc(1.4rem-1px)] bg-card/95 px-6 py-7 sm:px-8 sm:py-9">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_44%,hsl(var(--secondary)/0.16),transparent_30%),linear-gradient(110deg,transparent_15%,hsl(var(--primary)/0.05)_55%,transparent_80%)]" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_19rem]">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <Badge className="border-0 bg-secondary/15 text-secondary">Upcoming Course 2027</Badge>
                  <Badge className="border border-yellow-400/30 bg-yellow-400/10 text-yellow-300">
                    <Sparkles className="mr-1 h-3 w-3" aria-hidden="true" />
                    New
                  </Badge>
                </div>

                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-foreground/40">
                  Live forensic course
                </p>
                <h3 className="mt-3 max-w-3xl font-heading text-2xl font-bold leading-tight text-heading sm:text-3xl">
                  Cyber Forensics Investigation - Five-Week Live Course
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                  Participate in a hands-on exploration of cyber crime investigation and digital forensics through a comprehensive five-week live course offered by Cyber Dravida.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-xs text-foreground/55 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-secondary" aria-hidden="true" />
                    Five weeks
                  </span>
                  <span className="flex items-center gap-2">
                    <Radio className="h-4 w-4 text-secondary" aria-hidden="true" />
                    Interactive live sessions
                  </span>
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-secondary" aria-hidden="true" />
                    Hands-on investigation
                  </span>
                </div>
              </div>

              <div className="relative mx-auto hidden h-52 w-52 items-center justify-center lg:flex">
                <div className="absolute inset-0 rounded-full border border-secondary/15" />
                <div className="absolute inset-5 rounded-full border border-dashed border-primary/25 transition-transform duration-700 group-hover:rotate-12" />
                <div className="absolute inset-10 rounded-full bg-secondary/10 blur-xl" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-secondary/35 bg-background/80 shadow-[0_0_40px_hsl(var(--secondary)/0.16)]">
                  <Fingerprint className="h-14 w-14 text-secondary" aria-hidden="true" />
                </div>
                <span className="absolute right-0 top-10 h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_14px_hsl(var(--secondary))]" />
                <span className="absolute bottom-8 left-2 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              </div>
            </div>

            <div className="relative mt-7 flex items-center justify-between border-t border-border pt-5">
              <span className="text-xs text-foreground/40">Select to inspect program details</span>
              <span className="flex items-center gap-2 font-heading text-sm font-semibold text-secondary transition-colors group-hover:text-secondary/80">
                View Program Details
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-h-[88vh] w-[calc(100%-1.5rem)] max-w-5xl overflow-y-auto border-white/10 bg-background/70 p-0 shadow-[0_30px_100px_hsl(var(--background)/0.9),0_0_50px_hsl(var(--secondary)/0.12)] backdrop-blur-2xl sm:rounded-2xl">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,hsl(var(--foreground)/0.035),transparent_38%,hsl(var(--secondary)/0.035))]" />
        </div>

        <div className="relative p-5 sm:p-8 lg:p-10">
          <DialogHeader className="pr-8">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Badge className="border-0 bg-secondary/15 text-secondary">Upcoming 2027</Badge>
              <Badge className="border border-white/10 bg-white/5 text-foreground/65">Five-Week Live Course</Badge>
            </div>
            <DialogTitle className="font-heading text-2xl font-bold leading-tight text-heading sm:text-3xl lg:text-4xl">
              Cyber Forensics Investigation
            </DialogTitle>
            <DialogDescription className="max-w-3xl pt-3 text-sm leading-relaxed text-foreground/60 sm:text-base">
              A practical path into cyber crime investigation and digital forensics for aspiring digital investigators, cybersecurity professionals, and forensic analysts.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 border-y border-white/10 py-6">
            <p className="max-w-4xl text-sm leading-7 text-foreground/70 sm:text-base">
              Participants will acquire practical experience using forensic tools, evidence acquisition techniques, data recovery processes, and real-world case analysis through interactive live sessions, comprehensive toolkits, and expert mentorship.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <section aria-labelledby="eligibility-heading">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/10 text-secondary">
                  <Users className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">Who can apply</p>
                  <h3 id="eligibility-heading" className="font-heading text-lg font-semibold text-heading">Eligibility Criteria</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/65">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="requirements-heading" className="lg:border-l lg:border-white/10 lg:pl-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Laptop className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">What you need</p>
                  <h3 id="requirements-heading" className="font-heading text-lg font-semibold text-heading">Requirements</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/65">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-9 rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.045] p-5 sm:p-6" aria-labelledby="disclaimer-heading">
            <div className="flex items-start gap-4">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" aria-hidden="true" />
              <div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-yellow-300/80" aria-hidden="true" />
                  <h3 id="disclaimer-heading" className="font-heading text-base font-semibold text-yellow-100">Ethical Use Disclaimer</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {disclaimer.map((item) => (
                    <li key={item} className="text-xs leading-relaxed text-foreground/55 sm:text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-foreground/40">Schedule, admissions, and enrollment details will be announced before launch.</p>
            <span className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-secondary">
              <Fingerprint className="h-4 w-4" aria-hidden="true" />
              Admissions opening in 2027
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpcomingForensicsCourse;
