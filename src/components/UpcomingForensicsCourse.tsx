import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Clock3,
  Fingerprint,
  GraduationCap,
  Laptop,
  Mail,
  MonitorPlay,
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

const courseDetails = [
  { label: "Duration", value: "5 weeks", icon: Clock3 },
  { label: "Class time", value: "9:00 PM - 10:00 PM", icon: Radio },
  { label: "Delivery", value: "Live online", icon: MonitorPlay },
  { label: "Level", value: "Beginner - Intermediate", icon: GraduationCap },
  { label: "Language", value: "Kannada + English", icon: Users },
  { label: "Recordings", value: "Included", icon: BookOpen },
];

const learningOutcomes = [
  "Collect, preserve, and verify digital evidence using sound forensic methods.",
  "Analyse CDR, IPDR, tower, website, and network-activity records.",
  "Apply OSINT and social-media research to authorised investigations.",
  "Understand mobile, computer, WhatsApp, VoIP, malware, and metadata forensics.",
  "Recover inaccessible data and document findings in structured investigation reports.",
  "Explore dark-web investigation concepts and the role of AI in cyber forensics.",
];

const syllabus = [
  {
    week: "Week 01",
    title: "Cyber-Forensics Foundations",
    topics: [
      "Cybercrime and cyber-forensics fundamentals",
      "Forensic lab setup and command-line essentials",
      "Forensic-tool installation and configuration",
      "Digital-evidence identification and collection",
    ],
  },
  {
    week: "Week 02",
    title: "Evidence and Telecom Analysis",
    topics: [
      "Data integrity and forensic acquisition",
      "Evidence authenticity and write blockers",
      "CDR, IPDR, tower-dump, and ILD analysis",
    ],
  },
  {
    week: "Week 03",
    title: "Web, Mobile and Data Recovery",
    topics: [
      "Website information gathering and OSINT",
      "Website and network-traffic monitoring",
      "Mobile-device forensics",
      "Computer and storage-device data recovery",
    ],
  },
  {
    week: "Week 04",
    title: "Computer and Application Forensics",
    topics: [
      "Computer forensics and authorised access-recovery concepts",
      "VoIP and WhatsApp investigation",
      "Malware-analysis fundamentals",
      "Photo and metadata forensics",
    ],
  },
  {
    week: "Week 05",
    title: "Advanced Investigation",
    topics: [
      "OSINT and social-media investigation",
      "Dark-web and AI-assisted forensic concepts",
      "Solved cybercrime case discussions",
      "Reporting, career scope, and professional guidance",
    ],
  },
];

const practicalAreas = [
  "Disk and file-system analysis",
  "Network-traffic examination",
  "Metadata extraction and hash verification",
  "Data recovery",
  "OSINT research",
  "Mobile and application analysis",
  "Evidence documentation and reporting",
];

const benefits = [
  "Practical instructor-led live training",
  "Kannada support with simple English explanations",
  "Session recordings, e-book, and learning materials",
  "Guided forensic exercises and case-study discussions",
  "Investigation-oriented projects",
  "Course-completion certificate",
  "Performance-based Letter of Recommendation",
];

const audience = [
  "Cybersecurity, IT, and computer-science students",
  "Police and law-enforcement personnel",
  "Cybersecurity and digital-investigation professionals",
  "Lawyers, judicial professionals, and researchers",
  "Beginners and cyber-forensics enthusiasts",
];

const eligibility = [
  "Open to students, professionals, and cyber enthusiasts.",
  "No previous cyber-forensics experience is required.",
  "Basic computer, internet, and networking knowledge is recommended, but not mandatory.",
];

const requirements = [
  "A Windows or Linux-based PC or laptop with internet access.",
  "A minimum of 4 GB RAM is recommended for forensic tools.",
  "A stable internet connection for live sessions and downloads.",
  "Willingness to learn and participate actively in live discussions.",
];

const approvedEnvironments = [
  "Personally owned devices",
  "Instructor-provided lab systems",
  "Approved training datasets",
  "Simulated investigation environments",
  "Systems covered by explicit permission",
];

const interestEmail =
  "mailto:cyberdravida@gmail.com?subject=Interest%20in%20Certified%20Cyber%20Forensic%20Investigation%202027";

const CourseList = ({ items, accent = "secondary" }: { items: string[]; accent?: "secondary" | "primary" }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/65">
        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${accent === "secondary" ? "text-secondary" : "text-primary"}`} aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

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
          aria-label="View details for Certified Cyber Forensic Investigation five-week course"
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
                  Live training in Kannada + English
                </p>
                <h3 className="mt-3 max-w-3xl font-heading text-2xl font-bold leading-tight text-heading sm:text-3xl">
                  Certified Cyber Forensic Investigation
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/60 sm:text-base">
                  Build practical skills in cybercrime investigation, digital-evidence handling, and forensic analysis through a structured five-week live course.
                </p>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-xs text-foreground/55 sm:text-sm">
                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-secondary" aria-hidden="true" />
                    Five weeks
                  </span>
                  <span className="flex items-center gap-2">
                    <Radio className="h-4 w-4 text-secondary" aria-hidden="true" />
                    Live online classes
                  </span>
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-secondary" aria-hidden="true" />
                    Beginner - Intermediate
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

            <div className="relative mt-7 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-foreground/40">Syllabus, outcomes, eligibility, and course benefits</span>
              <span className="flex items-center gap-2 font-heading text-sm font-semibold text-secondary transition-colors group-hover:text-secondary/80">
                Explore Course
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] w-[calc(100%-1.5rem)] max-w-6xl overflow-y-auto border-white/10 bg-background/75 p-0 shadow-[0_30px_100px_hsl(var(--background)/0.9),0_0_50px_hsl(var(--secondary)/0.12)] backdrop-blur-2xl sm:rounded-2xl">
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
            <DialogTitle className="max-w-4xl font-heading text-2xl font-bold leading-tight text-heading sm:text-3xl lg:text-4xl">
              Certified Cyber Forensic Investigation
            </DialogTitle>
            <DialogDescription className="max-w-3xl pt-3 text-sm leading-relaxed text-foreground/60 sm:text-base">
              Learn cyber investigation in Kannada + English through practical demonstrations, guided exercises, case discussions, and structured forensic reporting.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#forensics-syllabus"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-heading text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_hsl(var(--primary)/0.25)] transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View Full Syllabus
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={interestEmail}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-secondary/30 bg-secondary/10 px-5 py-3 font-heading text-sm font-semibold text-secondary transition hover:bg-secondary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              Register Interest
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <section className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3" aria-label="Course details">
            {courseDetails.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 bg-background/70 p-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/35">{label}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground/80">{value}</p>
                </div>
              </div>
            ))}
          </section>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <section aria-labelledby="outcomes-heading">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-secondary">Practical outcomes</p>
              <h3 id="outcomes-heading" className="mt-2 font-heading text-2xl font-bold text-heading">What You Will Learn</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                Every topic is taught with simple explanations, practical examples, and a clear investigation-focused workflow.
              </p>
              <div className="mt-6">
                <CourseList items={learningOutcomes} />
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6" aria-labelledby="tools-heading">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Laptop className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">Lab exposure</p>
                  <h3 id="tools-heading" className="font-heading text-lg font-semibold text-heading">Tools and Practical Areas</h3>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-foreground/45">
                Selected open-source and educational tools may vary based on availability, compatibility, and training requirements.
              </p>
              <div className="mt-5">
                <CourseList items={practicalAreas} accent="primary" />
              </div>
            </section>
          </div>

          <section id="forensics-syllabus" className="scroll-mt-6 pt-12" aria-labelledby="syllabus-heading">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-secondary">Five-week learning path</p>
              <h3 id="syllabus-heading" className="mt-2 font-heading text-2xl font-bold text-heading">Course Syllabus</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                Progress from evidence fundamentals to advanced, case-oriented cyber investigation.
              </p>
            </div>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {syllabus.map((module, index) => (
                <article
                  key={module.week}
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.055] to-transparent p-5 ${index === syllabus.length - 1 ? "md:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">{module.week}</p>
                      <h4 className="mt-2 font-heading text-base font-semibold text-heading sm:text-lg">{module.title}</h4>
                    </div>
                    <span className="font-heading text-3xl font-bold text-white/[0.06]">0{index + 1}</span>
                  </div>
                  <div className="mt-5">
                    <CourseList items={module.topics} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="mt-12 grid gap-8 border-y border-white/10 py-9 lg:grid-cols-3">
            <section aria-labelledby="audience-heading">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">Designed for</p>
              <h3 id="audience-heading" className="mt-2 font-heading text-lg font-semibold text-heading">Who Can Join?</h3>
              <div className="mt-5"><CourseList items={audience} /></div>
            </section>
            <section aria-labelledby="benefits-heading" className="lg:border-l lg:border-white/10 lg:pl-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">Included</p>
              <h3 id="benefits-heading" className="mt-2 font-heading text-lg font-semibold text-heading">Course Benefits</h3>
              <div className="mt-5"><CourseList items={benefits} accent="primary" /></div>
            </section>
            <section aria-labelledby="eligibility-heading" className="lg:border-l lg:border-white/10 lg:pl-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">Entry requirements</p>
              <h3 id="eligibility-heading" className="mt-2 font-heading text-lg font-semibold text-heading">Eligibility</h3>
              <div className="mt-5"><CourseList items={eligibility} /></div>
              <h4 className="mt-7 font-heading text-sm font-semibold text-heading">System Requirements</h4>
              <div className="mt-4"><CourseList items={requirements} accent="primary" /></div>
            </section>
          </div>

          <section className="mt-9 rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.045] p-5 sm:p-6" aria-labelledby="disclaimer-heading">
            <div className="flex items-start gap-4">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" aria-hidden="true" />
              <div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-yellow-300/80" aria-hidden="true" />
                  <h3 id="disclaimer-heading" className="font-heading text-base font-semibold text-yellow-100">Ethical and Legal Use</h3>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-foreground/60 sm:text-sm">
                  This course is intended only for education, defensive security, and authorised digital investigation. Unauthorised access, surveillance, interception, or collection of personal information is strictly prohibited.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-yellow-100/70">Practical work is limited to:</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {approvedEnvironments.map((item) => (
                    <span key={item} className="flex items-center gap-2 text-xs text-foreground/55 sm:text-sm">
                      <Check className="h-4 w-4 shrink-0 text-yellow-300" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mt-9 overflow-hidden rounded-2xl border border-secondary/20 bg-gradient-to-r from-secondary/10 via-primary/10 to-transparent p-6 sm:p-8" aria-labelledby="journey-heading">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-secondary">Upcoming in 2027</p>
                <h3 id="journey-heading" className="mt-2 font-heading text-xl font-bold text-heading sm:text-2xl">Start Your Cyber-Forensics Journey</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                  Register your interest to receive schedule, admissions, brochure, and enrollment updates when registrations open.
                </p>
              </div>
              <a
                href={interestEmail}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 font-heading text-sm font-bold text-secondary-foreground shadow-[0_12px_35px_hsl(var(--secondary)/0.2)] transition hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Register Interest
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpcomingForensicsCourse;
