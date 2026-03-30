// Default site data — all hardcoded content extracted here for admin editing

export interface HeroData {
  badgeText: string;
  headingLine1: string;
  headingLine2: string;
  subheading: string;
  cta1Text: string;
  cta2Text: string;
  statPills: string[];
}

export interface AboutFeature {
  icon: string;
  label: string;
  desc: string;
}

export interface AboutData {
  heading: string;
  paragraph1: string;
  paragraph2: string;
  features: AboutFeature[];
}

export interface ServiceItem {
  icon: string;
  color: string;
  title: string;
  slug: string;
  desc: string;
}

export interface ServicesData {
  heading: string;
  subheading: string;
  items: ServiceItem[];
}

export interface ProductItem {
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  price: number;
  link: string;
  popular?: boolean;
  comingSoon?: boolean;
}

export interface FeaturedCourse {
  categoryTag: string;
  title: string;
  description: string;
  features: string[];
  price: number;
  ctaText: string;
  link: string;
  salesBadge: string;
  enrolledText: string;
}

export interface Testimonial {
  quote: string;
  translation: string;
  author: string;
}

export interface CoursesData {
  heading: string;
  subheading: string;
  featured: FeaturedCourse;
  products: ProductItem[];
  bottomCtaText: string;
  bottomCtaLink: string;
  testimonials: Testimonial[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface StatsData {
  heading: string;
  items: StatItem[];
}

export interface EventItem {
  status: "Upcoming" | "Past";
  title: string;
  date: string;
  location: string;
  desc: string;
  link: string;
}

export interface EventsData {
  heading: string;
  subheading: string;
  items: EventItem[];
}

export interface TeamLink {
  label: string;
  url: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  tags: string[];
  bio: string;
  avatar: string;
  initials: string;
  links: TeamLink[];
}

export interface TeamData {
  heading: string;
  subheading: string;
  members: TeamMember[];
  bottomText: string;
  bottomEmail: string;
}

export interface BlogPost {
  tag: string;
  tagClass: string;
  title: string;
  excerpt: string;
  link: string;
  author: string;
  readTime: string;
}

export interface BlogData {
  heading: string;
  subheading: string;
  posts: BlogPost[];
  allPostsUrl: string;
}

export interface ContactData {
  email: string;
  location: string;
  website: string;
  websiteUrl: string;
  linkedinUrl: string;
  successMessage: string;
  successDescription: string;
}

export interface FooterData {
  copyright: string;
}

export interface ChatbotData {
  botName: string;
  subtitle: string;
  welcomeMessage: string;
  enabled: boolean;
}

export interface SiteData {
  hero: HeroData;
  about: AboutData;
  services: ServicesData;
  courses: CoursesData;
  stats: StatsData;
  events: EventsData;
  team: TeamData;
  blog: BlogData;
  contact: ContactData;
  footer: FooterData;
  chatbot: ChatbotData;
}

export const defaultSiteData: SiteData = {
  hero: {
    badgeText: "Karnataka's Cybersecurity Community",
    headingLine1: "Where Curiosity",
    headingLine2: "Meets Cybersecurity.",
    subheading: "Cyber Dravida is a student-led cybersecurity organization focused on training, awareness, and building a security-first mindset across Karnataka.",
    cta1Text: "Explore Programs",
    cta2Text: "Meet the Team",
    statPills: ["500+ Trained", "Karnataka Based", "Est. 2025"],
  },
  about: {
    heading: "About Cyber Dravida",
    paragraph1: "Cyber Dravida is a Karnataka-based cybersecurity organization founded in September 2025. We exist to close the cybersecurity awareness gap in Tier-2 India by training students, conducting outreach programs, and building a community of future security professionals.",
    paragraph2: "Founded by Aniket Tegginamath (TryHackMe Top 1%, CEH, OSINT Researcher), Cyber Dravida operates across colleges and institutions in Karnataka with a mission to make cybersecurity accessible to everyone.",
    features: [
      { icon: "Shield", label: "Awareness First", desc: "Making digital safety a habit, not an afterthought." },
      { icon: "BookOpen", label: "Practical Training", desc: "Hands-on labs, CTF challenges, and real-world scenarios." },
      { icon: "Users", label: "Community Driven", desc: "Built by students, for students." },
      { icon: "Globe", label: "Karnataka Focused", desc: "Local impact, national vision." },
    ],
  },
  services: {
    heading: "What We Do",
    subheading: "Our programs are designed to take you from zero to security-ready.",
    items: [
      { icon: "Zap", color: "text-secondary", title: "Cybersecurity Training", slug: "cybersecurity-training", desc: "Structured courses covering ethical hacking, OSINT, network security, and digital forensics — from beginner to advanced." },
      { icon: "Radio", color: "text-primary", title: "Awareness Outreach", slug: "awareness-outreach", desc: "Campus workshops, seminars, and awareness drives to educate students and institutions about cyber threats." },
      { icon: "Flag", color: "text-destructive", title: "CTF Competitions", slug: "ctf-competitions", desc: "Participate in Capture the Flag challenges designed to sharpen your offensive and defensive security skills." },
      { icon: "Search", color: "text-secondary", title: "OSINT & Investigation", slug: "osint-investigation", desc: "Learn open-source intelligence gathering and cyber crime investigation techniques used by real analysts." },
    ],
  },
  courses: {
    heading: "Learn With Us",
    subheading: "Premium courses, tools, and resources to level up your cybersecurity skills. All products delivered via Topmate.",
    featured: {
      categoryTag: "OSINT",
      title: "Advanced OSINT Investigation Course (ಕನ್ನಡ)",
      description: "Master digital forensics, crypto tracking, and the darkweb. A practical roadmap to professional intelligence — taught entirely in Kannada.",
      features: [
        "Clear Web & Darkweb mastery",
        "Real-world investigative skills",
        "Crypto transaction tracking",
        "Professional OpSec techniques",
        "Pre-recorded — learn at your own pace",
      ],
      price: 5999,
      ctaText: "Enroll Now",
      link: "https://topmate.io/cyberdravida/1882730",
      salesBadge: "🔥 Most Popular",
      enrolledText: "6+ Students Enrolled",
    },
    products: [
      { tag: "Hacking", tagColor: "bg-primary/20 text-primary", title: "Android Hacking 101: Hands-on for Beginners", desc: "Master Android hacking basics with practical, hands-on exercises.", price: 2999, link: "https://topmate.io/cyberdravida/1879589" },
      { tag: "Recovery", tagColor: "bg-secondary/20 text-secondary", title: "Professional Credential Recovery Tool", desc: "Recover browser, Wi-Fi & Google-saved logins. Educational toolkit.", price: 999, link: "https://topmate.io/cyberdravida/1882129" },
      { tag: "Recovery", tagColor: "bg-secondary/20 text-secondary", title: "Data Recovery from HDD, SSD, Pendrive, etc.", desc: "Recover data from HDD, SSD, USB & SD Cards with professional tools.", price: 699, link: "https://topmate.io/cyberdravida/1880977" },
      { tag: "Security", tagColor: "bg-destructive/20 text-destructive", title: "Android Gallery Analysis", desc: "Educational guide on Android Gallery security flaws and analysis.", price: 666, link: "https://topmate.io/cyberdravida/1880974" },
      { tag: "Mentorship", tagColor: "bg-primary/20 text-primary", title: "🚀 1:1 Cyber Career Roadmap (2026)", desc: "Clear your hacking doubts in a personal 10-min video call. Available in Kannada and Hindi.", price: 99, link: "https://topmate.io/cyberdravida/1879521", popular: true },
      { tag: "Automation", tagColor: "bg-primary/20 text-primary", title: "How to Create TG Bot & Setup Your Own AI Agent Locally", desc: "Learn to build Telegram bots and run your own AI agent on your local system — step by step guide.", price: 9, link: "https://topmate.io/cyberdravida/2025133" },
      { tag: "Antivirus", tagColor: "bg-destructive/20 text-destructive", title: "Bitdefender Antivirus Plus (1 Year – 1 Device)", desc: "Top-rated antivirus protection for your PC. Covers ransomware, phishing & online threats for 1 year.", price: 799, link: "https://topmate.io/cyberdravida" },
      { tag: "Antivirus", tagColor: "bg-destructive/20 text-destructive", title: "Bitdefender Mobile Security (1 Year – 1 Device)", desc: "Complete mobile protection — malware scanner, web security & anti-theft for Android/iOS.", price: 299, link: "https://topmate.io/cyberdravida" },
      { tag: "Forensics", tagColor: "bg-secondary/20 text-secondary", title: "Digital Forensics & Evidence Collection", desc: "Learn to collect, preserve and analyze digital evidence from devices and networks.", price: 1999, link: "https://topmate.io/cyberdravida" },
      { tag: "Networking", tagColor: "bg-primary/20 text-primary", title: "Network Security Fundamentals", desc: "Master firewalls, IDS/IPS, packet analysis and network hardening techniques.", price: 1499, link: "https://topmate.io/cyberdravida" },
      { tag: "Bug Bounty", tagColor: "bg-destructive/20 text-destructive", title: "Bug Bounty Hunting for Beginners", desc: "Start earning from bug bounties — learn recon, XSS, IDOR and responsible disclosure.", price: 2499, link: "https://topmate.io/cyberdravida" },
      { tag: "Malware", tagColor: "bg-secondary/20 text-secondary", title: "Malware Analysis & Reverse Engineering", desc: "Analyze real-world malware samples using static and dynamic analysis techniques.", price: 3499, link: "https://topmate.io/cyberdravida" },
    ],
    bottomCtaText: "Explore all courses, tools & mentorship sessions",
    bottomCtaLink: "https://topmate.io/cyberdravida",
    testimonials: [
      { quote: "ಈ ಸೆಷನ್ ತುಂಬಾ ಅದ್ಭುತವಾಗಿತ್ತು. ಎಥಿಕಲ್ ಹ್ಯಾಕಿಂಗ್ ವಿಷಯದ ಬಗ್ಗೆ ಸರಳವಾಗಿ ಮತ್ತು ಸ್ಪಷ್ಟವಾಗಿ ಮಾಹಿತಿ ನೀಡಿದರು.", translation: "This session was amazing. The information about ethical hacking was delivered simply and clearly.", author: "Verified Student" },
      { quote: "ಈ ಕೋರ್ಸ್ ನನ್ನ ಕೆರಿಯರ್ ಅನ್ನು ಬದಲಾಯಿಸಿತು. ಇಲ್ಲಿ ಕಲಿಸಿದ OSINT ತಂತ್ರಗಳು ವಿಶ್ವ ದರ್ಜೆಯವು.", translation: "This course changed my career. The OSINT techniques taught here are world-class.", author: "OSINT Student" },
      { quote: "ಡಾರ್ಕ್ ವೆಬ್ ಇನ್ವೆಸ್ಟಿಗೇಶನ್ ಬಗ್ಗೆ ಇಷ್ಟು ಸ್ಪಷ್ಟವಾಗಿ ಯಾರೂ ವಿವರಿಸುವುದಿಲ್ಲ. ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ!", translation: "No one explains dark web investigation this clearly. Highly recommended!", author: "Cyber Security Enthusiast" },
      { quote: "ಕನ್ನಡದಲ್ಲಿ ಸೈಬರ್ ಸೆಕ್ಯುರಿಟಿ ಕಲಿಯಲು ತುಂಬಾ ಸುಲಭವಾಯಿತು. ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ಬಹಳ ಸಹಾಯಕವಾಯಿತು.", translation: "Learning cybersecurity in Kannada made it so much easier to understand.", author: "College Student" },
      { quote: "1:1 ಮೆಂಟಾರ್‌ಶಿಪ್ ಸೆಷನ್ ತುಂಬಾ ಉಪಯುಕ್ತವಾಗಿತ್ತು. ಸ್ಪಷ್ಟವಾದ ಕೆರಿಯರ್ ರೋಡ್‌ಮ್ಯಾಪ್ ಸಿಕ್ಕಿತು.", translation: "The 1:1 mentorship session was incredibly useful. Got a clear career roadmap.", author: "Career Mentee" },
    ],
  },
  stats: {
    heading: "Our Impact So Far",
    items: [
      { value: 500, suffix: "+", label: "Students Trained" },
      { value: 10, suffix: "+", label: "Events Conducted" },
      { value: 5, suffix: "+", label: "Colleges Reached" },
      { value: 1, suffix: "", label: "Year Active (Est. 2025)" },
    ],
  },
  events: {
    heading: "Events & Programs",
    subheading: "Stay updated on our upcoming and past activities.",
    items: [
      { status: "Upcoming", title: "Cyber Awareness Workshop", date: "April 2026", location: "GM University, Davangere", desc: "A hands-on workshop on phishing, social engineering, and safe browsing practices for college students.", link: "" },
      { status: "Upcoming", title: "CTF Challenge — Dravida Cup", date: "May 2026", location: "Online", desc: "Cyber Dravida's flagship capture-the-flag competition open to all Karnataka students.", link: "" },
      { status: "Past", title: "Cybersecurity Orientation", date: "October 2025", location: "Davangere", desc: "Launch event introducing Cyber Dravida's mission and programs to students across FCIT.", link: "" },
    ],
  },
  team: {
    heading: "Meet the Team",
    subheading: "The people behind Cyber Dravida.",
    members: [
      {
        name: "Aniket Tegginamath",
        role: "Founder & Lead Researcher",
        tags: ["CEH", "OSINT", "TryHackMe Top 1%", "CCI", "Ethical Hacking Mentor"],
        bio: "Aniket is a cybersecurity researcher, ethical hacking mentor, and founder of Cyber Dravida. With experience in OSINT, dark web investigation, and cyber crime analysis, he has trained 500+ individuals and is ranked in the top 1% globally on TryHackMe.",
        avatar: "/team/aniket.png",
        initials: "AT",
        links: [
          { label: "TryHackMe", url: "https://tryhackme.com/p/D4rkMatrix", icon: "Terminal" },
          { label: "LinkedIn", url: "https://www.linkedin.com/in/aniket-tegginamath/", icon: "Linkedin" },
          { label: "Linktree", url: "https://linktr.ee/anikettegginamath", icon: "Link" },
        ],
      },
    ],
    bottomText: "We're growing. Interested in contributing? Reach out at",
    bottomEmail: "cyberdravida@gmail.com",
  },
  blog: {
    heading: "From the Blog",
    subheading: "Insights, writeups, and cybersecurity deep-dives.",
    posts: [
      { tag: "OSINT", tagClass: "bg-secondary/20 text-secondary border-secondary/30", title: "5 OSINT Tools Every Investigator Should Know", excerpt: "Open-source intelligence is more powerful than most people realize. Here are the tools I use daily...", link: "https://medium.com/@anikettegginamath", author: "Aniket Tegginamath", readTime: "5 min read" },
      { tag: "CTF", tagClass: "bg-primary/20 text-primary border-primary/30", title: "My TryHackMe Journey to Top 1% Global Ranking", excerpt: "Getting to the top 1% wasn't overnight. Here's my honest learning path and the rooms that changed everything...", link: "https://medium.com/@anikettegginamath", author: "Aniket Tegginamath", readTime: "5 min read" },
      { tag: "Awareness", tagClass: "bg-destructive/20 text-destructive border-destructive/30", title: "How Phishing Attacks Are Evolving in 2026", excerpt: "Phishing isn't just dodgy emails anymore. AI-generated attacks are making it harder for anyone to stay safe...", link: "https://medium.com/@anikettegginamath", author: "Aniket Tegginamath", readTime: "5 min read" },
    ],
    allPostsUrl: "https://medium.com/@anikettegginamath",
  },
  contact: {
    email: "cyberdravida@gmail.com",
    location: "Karnataka, India",
    website: "cyberdravida.in",
    websiteUrl: "https://www.cyberdravida.in/",
    linkedinUrl: "https://linkedin.com/company/cyberdravida",
    successMessage: "Message sent!",
    successDescription: "We'll get back to you soon.",
  },
  footer: {
    copyright: "© 2025 Cyber Dravida. All rights reserved.",
  },
  chatbot: {
    botName: "Dravida AI",
    subtitle: "Cybersecurity Assistant",
    welcomeMessage: "Hey! 👋 I'm Dravida AI, your cybersecurity guide. Ask me anything about ethical hacking, OSINT, staying safe online, or Cyber Dravida's programs!",
    enabled: true,
  },
};
