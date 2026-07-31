import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Clock3,
  ExternalLink,
  FileCheck2,
  FlaskConical,
  GraduationCap,
  Languages,
  Laptop,
  Mail,
  PlayCircle,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface EthicalHackingCourseDetailsProps {
  enrollmentLink: string;
  promotionActive: boolean;
  promotionPrice: number;
  standardPrice: number;
}

const courseFacts = [
  { label: "Recorded content", value: "50+ hours", icon: Clock3 },
  { label: "Curriculum", value: "8 core + 1 bonus", icon: BookOpen },
  { label: "Learning mode", value: "Self-paced", icon: PlayCircle },
  { label: "Practical focus", value: "65% hands-on", icon: FlaskConical },
  { label: "Level", value: "Beginner - Intermediate", icon: GraduationCap },
  { label: "Language", value: "Kannada + English", icon: Languages },
];

const modules = [
  {
    number: "01",
    title: "Cybersecurity and Ethical Hacking",
    summary: "Core security concepts, hacker types, the cyberattack lifecycle, scope, authorisation, ethics, and responsible disclosure.",
  },
  {
    number: "02",
    title: "Computer Networking Fundamentals",
    summary: "IP addressing, TCP/UDP, ports, protocols, OSI and TCP/IP models, network commands, and packet analysis with Wireshark.",
  },
  {
    number: "03",
    title: "Linux and Kali Linux",
    summary: "A safe virtual lab, terminal navigation, permissions, packages, services, file operations, and essential Bash workflows.",
  },
  {
    number: "04",
    title: "Information Gathering and OSINT",
    summary: "Passive and active reconnaissance, WHOIS, DNS, website technologies, archives, metadata, public exposure, and legal boundaries.",
  },
  {
    number: "05",
    title: "Network Scanning and Enumeration",
    summary: "Authorised host discovery, Nmap scanning, service detection, OS fingerprinting, result interpretation, and evidence documentation.",
  },
  {
    number: "06",
    title: "Vulnerability and Security Assessment",
    summary: "Threat, risk, CVE and CVSS fundamentals, safe lab scanning, false-positive review, prioritisation, and remediation reporting.",
  },
  {
    number: "07",
    title: "Web Application Security",
    summary: "HTTP, sessions, authentication, the OWASP Top 10, Burp Suite, and beginner labs using legal training platforms.",
  },
  {
    number: "08",
    title: "Password, Account and Personal Security",
    summary: "Hashing, salting, attack concepts, MFA, password managers, defensive auditing, and account-hardening practices.",
  },
  {
    number: "09",
    title: "Reporting and Career Guidance",
    summary: "Professional findings, evidence, risk ratings, remediation, responsible disclosure, portfolio building, and a final capstone report.",
  },
];

const included = [
  "Complete recorded course delivered through Topmate",
  "Downloadable notes and command references",
  "Guided demonstrations and legal practice exercises",
  "Module-wise quizzes and practical assignments",
  "Final assessment and beginner capstone project",
  "Community or limited doubt support",
  "Cyber Dravida course-completion certificate",
];

const outcomes = [
  "Build and use an isolated ethical-hacking lab safely.",
  "Inspect network traffic and perform authorised reconnaissance.",
  "Scan and enumerate legal lab systems, then interpret findings.",
  "Assess common vulnerabilities and recommend practical remediation.",
  "Test beginner web-security concepts in purpose-built platforms.",
  "Write a structured security assessment with evidence and risk ratings.",
];

const requirements = [
  "No previous cybersecurity experience is required.",
  "Basic computer literacy and web-browser familiarity.",
  "Windows, macOS, or Linux computer; 8 GB RAM and 50 GB free storage recommended for virtual labs.",
  "Stable broadband connection; approximately 10 Mbps recommended.",
  "Willingness to follow the course ethics and authorised-testing policy.",
];

const CourseList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/65">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-3 w-3 text-primary" aria-hidden="true" />
        </span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const EthicalHackingCourseDetails = ({
  enrollmentLink,
  promotionActive,
  promotionPrice,
  standardPrice,
}: EthicalHackingCourseDetailsProps) => {
  const activePrice = promotionActive ? promotionPrice : standardPrice;

  return (
    <DialogContent className="max-h-[90vh] w-[calc(100%-1.5rem)] max-w-6xl overflow-y-auto border-white/10 bg-background/75 p-0 shadow-[0_30px_100px_hsl(var(--background)/0.9),0_0_50px_hsl(var(--primary)/0.12)] backdrop-blur-2xl sm:rounded-2xl">
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,hsl(var(--foreground)/0.035),transparent_38%,hsl(var(--primary)/0.035))]" />
      </div>

      <div className="relative p-5 sm:p-8 lg:p-10">
        <DialogHeader className="pr-8 text-left">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <Badge className="border-0 bg-primary/15 text-primary">Recorded Course</Badge>
            <Badge className="border border-secondary/20 bg-secondary/10 text-secondary">Kannada + English</Badge>
          </div>
          <DialogTitle className="max-w-4xl font-heading text-2xl font-bold leading-tight text-heading sm:text-3xl lg:text-4xl">
            Ethical Hacking - Beginner to Intermediate (ಕನ್ನಡ) + (English)
          </DialogTitle>
          <DialogDescription className="max-w-3xl pt-3 text-sm leading-relaxed text-foreground/60 sm:text-base">
            Build a practical cybersecurity foundation through structured recorded lessons, guided labs, assignments, and a final security-assessment project - all within legal, authorised environments.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button className="min-h-11 px-5" asChild>
            <a href={enrollmentLink} target="_blank" rel="noopener noreferrer">
              {promotionActive ? "Claim Early-Bird Access" : "Enroll Now"}
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <a
            href="#ethical-course-modules"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-5 py-3 font-heading text-sm font-semibold text-primary transition hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Explore Curriculum
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <DialogClose asChild>
            <a
              href="#purchase-guide"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-heading text-sm font-semibold text-foreground/75 transition hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              How to Purchase
              <PlayCircle className="h-4 w-4 text-secondary" aria-hidden="true" />
            </a>
          </DialogClose>
        </div>

        <div className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-y border-white/10 py-5">
          <span className="font-heading text-3xl font-bold text-heading">₹{activePrice.toLocaleString("en-IN")}</span>
          {promotionActive && (
            <>
              <span className="text-sm text-foreground/40 line-through">₹{standardPrice.toLocaleString("en-IN")}</span>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">Early-bird offer</span>
            </>
          )}
          <span className="ml-auto text-xs text-foreground/40">Secure checkout through Topmate</span>
        </div>

        <section className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3" aria-label="Course facts">
          {courseFacts.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex items-center gap-3 bg-background/70 p-4 sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/35">{label}</p>
                <p className="mt-1 text-sm font-semibold text-foreground/80">{value}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section aria-labelledby="ethical-included-heading">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Your learning package</p>
            <h3 id="ethical-included-heading" className="mt-2 font-heading text-2xl font-bold text-heading">What Is Included</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/55">
              Learn at your own pace over a recommended four-to-six-week schedule, with resources designed to move from foundations to professional reporting.
            </p>
            <div className="mt-6"><CourseList items={included} /></div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6" aria-labelledby="ethical-outcomes-heading">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-secondary/25 bg-secondary/10 text-secondary">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/35">Practical capability</p>
                <h3 id="ethical-outcomes-heading" className="font-heading text-lg font-semibold text-heading">Learning Outcomes</h3>
              </div>
            </div>
            <div className="mt-6"><CourseList items={outcomes} /></div>
          </section>
        </div>

        <section id="ethical-course-modules" className="scroll-mt-6 pt-12" aria-labelledby="ethical-modules-heading">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">8 core modules + 1 bonus</p>
            <h3 id="ethical-modules-heading" className="mt-2 font-heading text-2xl font-bold text-heading">Course Curriculum</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/55">
              A sequential path from security fundamentals and lab setup to assessment, reporting, and career-ready portfolio work.
            </p>
          </div>
          <div className="mt-7 divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {modules.map((module) => (
              <article key={module.number} className="grid gap-3 py-5 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:items-start sm:gap-5">
                <span className="font-mono text-xs font-bold text-primary">{module.number}</span>
                <h4 className="font-heading text-base font-semibold text-heading">{module.title}</h4>
                <p className="text-sm leading-relaxed text-foreground/55">{module.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 grid gap-8 border-y border-white/10 py-9 lg:grid-cols-2">
          <section aria-labelledby="ethical-requirements-heading">
            <div className="flex items-center gap-3">
              <Laptop className="h-5 w-5 text-secondary" aria-hidden="true" />
              <h3 id="ethical-requirements-heading" className="font-heading text-lg font-semibold text-heading">Eligibility and Requirements</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/55">
              Designed for complete beginners, cybersecurity students, early-career IT professionals, self-learners, and anyone transitioning into security.
            </p>
            <div className="mt-5"><CourseList items={requirements} /></div>
          </section>

          <section className="lg:border-l lg:border-white/10 lg:pl-8" aria-labelledby="ethical-certificate-heading">
            <div className="flex items-center gap-3">
              <FileCheck2 className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 id="ethical-certificate-heading" className="font-heading text-lg font-semibold text-heading">Assessment and Certificate</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/55">
              Complete the required modules, quizzes, final assessment, and capstone project to qualify for the Cyber Dravida Certificate of Completion - Beginner Ethical Hacking and Cybersecurity Program.
            </p>
            <div className="mt-5 rounded-xl border border-primary/15 bg-primary/[0.055] p-4 text-xs leading-relaxed text-foreground/55 sm:text-sm">
              This is a course-completion certificate issued by Cyber Dravida. It is not an official CEH certification, vendor certification, academic degree, or industry licence.
            </div>
          </section>
        </div>

        <section className="mt-9 rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.045] p-5 sm:p-6" aria-labelledby="ethical-safety-heading">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-yellow-300" aria-hidden="true" />
            <div>
              <h3 id="ethical-safety-heading" className="font-heading text-base font-semibold text-yellow-100">Ethics and Safety Commitment</h3>
              <p className="mt-3 text-xs leading-relaxed text-foreground/60 sm:text-sm">
                Every practical activity is limited to authorised training environments, personally owned systems, instructor-provided targets, or legal platforms such as TryHackMe, OWASP Juice Shop, DVWA, and PortSwigger Web Security Academy. Unauthorised testing of systems, networks, applications, or accounts is strictly prohibited.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-9 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent p-6 sm:p-8" aria-labelledby="ethical-final-cta-heading">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Start when you are ready</p>
              <h3 id="ethical-final-cta-heading" className="mt-2 font-heading text-xl font-bold text-heading sm:text-2xl">Build Skills You Can Demonstrate</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                Complete guided labs, document your findings, and finish with a structured capstone report suitable for a beginner portfolio.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="mailto:cyberdravida@gmail.com?subject=Ethical%20Hacking%20Course%20Question"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-heading text-sm font-semibold text-foreground/75 transition hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              >
                Ask a Question
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={enrollmentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground shadow-[0_12px_35px_hsl(var(--primary)/0.2)] transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {promotionActive ? "Claim Early-Bird Access" : "Enroll Now"}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </DialogContent>
  );
};

export default EthicalHackingCourseDetails;
