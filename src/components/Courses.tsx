import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import {
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  ShieldCheck,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

function usePriceCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 50;
    const handle = () => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (frame < totalFrames) requestAnimationFrame(handle);
    };
    requestAnimationFrame(handle);
  }, [inView, target]);
  return count;
}

interface FeaturedCourse {
  badge: string;
  badgeClass: string;
  tag: string;
  title: string;
  desc: string;
  price: number;
  link: string;
  features: string[];
  meta: string;
  metaIcon: LucideIcon;
  showRating?: boolean;
  promotion?: {
    price: number;
    code: string;
    note: string;
  };
  disclaimer?: string;
}

interface Product {
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  price: number;
  link: string;
  popular?: boolean;
  comingSoon?: boolean;
}

const featuredCourses: FeaturedCourse[] = [
  {
    badge: "New Course",
    badgeClass: "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
    tag: "Ethical Hacking",
    title: "Ethical Hacking — Beginner to Intermediate",
    desc: "Build a strong cybersecurity foundation, understand how ethical hackers think, and practise safely in legal training environments.",
    price: 2499,
    link: "https://topmate.io/cyberdravida/2210273",
    features: [
      "Networking, Linux, Kali Linux, OSINT, scanning, web security and reporting",
      "20–25 hours across 8 core modules plus a reporting and career module",
      "Beginner-friendly Kannada and English explanations",
      "Notes, worksheets, command references, quizzes and assignments",
      "Legal practical labs, a final project and completion certificate",
    ],
    meta: "Beginner–Intermediate · 20–25 hours",
    metaIcon: BookOpen,
    promotion: {
      price: 1999,
      code: "EB10",
      note: "Limited to 10 redemptions",
    },
    disclaimer:
      "For educational and authorized security testing only. Never test any website, network, account or system without explicit written permission.",
  },
  {
    badge: "Best Seller",
    badgeClass: "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
    tag: "OSINT",
    title: "Advanced OSINT Investigation Course (ಕನ್ನಡ)",
    desc: "Master digital forensics, crypto tracking, and the dark web through a practical roadmap to professional intelligence, taught entirely in Kannada.",
    price: 5999,
    link: "https://topmate.io/cyberdravida/1882730",
    features: [
      "Clear Web and Dark Web mastery",
      "Real-world investigative skills",
      "Crypto transaction tracking",
      "Professional OpSec techniques",
      "Pre-recorded — learn at your own pace",
    ],
    meta: "50+ Students Enrolled",
    metaIcon: Users,
    showRating: true,
  },
];

const products: Product[] = [
  {
    tag: "Hacking",
    tagColor: "bg-primary/20 text-primary",
    title: "Android Hacking 101: Hands-on for Beginners",
    desc: "Master Android hacking basics with practical, hands-on exercises.",
    price: 2999,
    link: "https://topmate.io/cyberdravida/1879589",
  },
  {
    tag: "Recovery",
    tagColor: "bg-secondary/20 text-secondary",
    title: "Professional Credential Recovery Tool",
    desc: "Recover browser, Wi-Fi & Google-saved logins. Educational toolkit.",
    price: 999,
    link: "https://topmate.io/cyberdravida/1882129",
  },
  {
    tag: "Recovery",
    tagColor: "bg-secondary/20 text-secondary",
    title: "Data Recovery from HDD, SSD, Pendrive, etc.",
    desc: "Recover data from HDD, SSD, USB & SD Cards with professional tools.",
    price: 699,
    link: "https://topmate.io/cyberdravida/1880977",
  },
  {
    tag: "Security",
    tagColor: "bg-destructive/20 text-destructive",
    title: "Android Gallery Analysis",
    desc: "Educational guide on Android Gallery security flaws and analysis.",
    price: 666,
    link: "https://topmate.io/cyberdravida/1880974",
  },
  {
    tag: "Mentorship",
    tagColor: "bg-primary/20 text-primary",
    title: "🚀 1:1 Cyber Career Roadmap (2026)",
    desc: "Clear your hacking doubts in a personal 10-min video call. Available in Kannada and Hindi.",
    price: 99,
    link: "https://topmate.io/cyberdravida/1879521",
    popular: true,
  },
  {
    tag: "Automation",
    tagColor: "bg-primary/20 text-primary",
    title: "How to Create TG Bot & Setup Your Own AI Agent Locally",
    desc: "Learn to build Telegram bots and run your own AI agent on your local system — step by step guide.",
    price: 9,
    link: "https://topmate.io/cyberdravida/2025133",
    popular: false,
    comingSoon: false,
  },
  {
    tag: "Antivirus",
    tagColor: "bg-destructive/20 text-destructive",
    title: "Bitdefender Antivirus Plus (1 Year – 1 Device)",
    desc: "Top-rated antivirus protection for your PC. Covers ransomware, phishing & online threats for 1 year.",
    price: 799,
    link: "https://topmate.io/cyberdravida",
  },
  {
    tag: "Antivirus",
    tagColor: "bg-destructive/20 text-destructive",
    title: "Bitdefender Mobile Security (1 Year – 1 Device)",
    desc: "Complete mobile protection — malware scanner, web security & anti-theft for Android/iOS.",
    price: 299,
    link: "https://topmate.io/cyberdravida",
  },
  {
    tag: "Forensics",
    tagColor: "bg-secondary/20 text-secondary",
    title: "Digital Forensics & Evidence Collection",
    desc: "Learn to collect, preserve and analyze digital evidence from devices and networks.",
    price: 1999,
    link: "https://topmate.io/cyberdravida",
  },
  {
    tag: "Networking",
    tagColor: "bg-primary/20 text-primary",
    title: "Network Security Fundamentals",
    desc: "Master firewalls, IDS/IPS, packet analysis and network hardening techniques.",
    price: 1499,
    link: "https://topmate.io/cyberdravida",
  },
  {
    tag: "Bug Bounty",
    tagColor: "bg-destructive/20 text-destructive",
    title: "Bug Bounty Hunting for Beginners",
    desc: "Start earning from bug bounties — learn recon, XSS, IDOR and responsible disclosure.",
    price: 2499,
    link: "https://topmate.io/cyberdravida",
  },
  {
    tag: "Malware",
    tagColor: "bg-secondary/20 text-secondary",
    title: "Malware Analysis & Reverse Engineering",
    desc: "Analyze real-world malware samples using static and dynamic analysis techniques.",
    price: 3499,
    link: "https://topmate.io/cyberdravida",
  },
];

const testimonials = [
  {
    quote: "ಈ ಸೆಷನ್ ತುಂಬಾ ಅದ್ಭುತವಾಗಿತ್ತು. ಎಥಿಕಲ್ ಹ್ಯಾಕಿಂಗ್ ವಿಷಯದ ಬಗ್ಗೆ ಸರಳವಾಗಿ ಮತ್ತು ಸ್ಪಷ್ಟವಾಗಿ ಮಾಹಿತಿ ನೀಡಿದರು.",
    translation: "This session was amazing. The information about ethical hacking was delivered simply and clearly.",
    author: "Verified Student",
  },
  {
    quote: "ಈ ಕೋರ್ಸ್ ನನ್ನ ಕೆರಿಯರ್ ಅನ್ನು ಬದಲಾಯಿಸಿತು. ಇಲ್ಲಿ ಕಲಿಸಿದ OSINT ತಂತ್ರಗಳು ವಿಶ್ವ ದರ್ಜೆಯವು.",
    translation: "This course changed my career. The OSINT techniques taught here are world-class.",
    author: "OSINT Student",
  },
  {
    quote: "ಡಾರ್ಕ್ ವೆಬ್ ಇನ್ವೆಸ್ಟಿಗೇಶನ್ ಬಗ್ಗೆ ಇಷ್ಟು ಸ್ಪಷ್ಟವಾಗಿ ಯಾರೂ ವಿವರಿಸುವುದಿಲ್ಲ. ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ!",
    translation: "No one explains dark web investigation this clearly. Highly recommended!",
    author: "Cyber Security Enthusiast",
  },
  {
    quote: "ಕನ್ನಡದಲ್ಲಿ ಸೈಬರ್ ಸೆಕ್ಯುರಿಟಿ ಕಲಿಯಲು ತುಂಬಾ ಸುಲಭವಾಯಿತು. ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳಲು ಬಹಳ ಸಹಾಯಕವಾಯಿತು.",
    translation: "Learning cybersecurity in Kannada made it so much easier to understand.",
    author: "College Student",
  },
  {
    quote: "1:1 ಮೆಂಟಾರ್‌ಶಿಪ್ ಸೆಷನ್ ತುಂಬಾ ಉಪಯುಕ್ತವಾಗಿತ್ತು. ಸ್ಪಷ್ಟವಾದ ಕೆರಿಯರ್ ರೋಡ್‌ಮ್ಯಾಪ್ ಸಿಕ್ಕಿತು.",
    translation: "The 1:1 mentorship session was incredibly useful. Got a clear career roadmap.",
    author: "Career Mentee",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const PriceDisplay = ({ price, inView, large }: { price: number; inView: boolean; large?: boolean }) => {
  const count = usePriceCountUp(price, inView);
  const formatted = count.toLocaleString("en-IN");
  return (
    <span
      className={`font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${large ? "text-3xl sm:text-4xl" : "text-xl"}`}
    >
      ₹{formatted}
    </span>
  );
};

const FeaturedCourseCard = ({ course, inView }: { course: FeaturedCourse; inView: boolean }) => {
  const MetaIcon = course.metaIcon;

  return (
    <Card
      className="bg-card border-border relative overflow-hidden"
      style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.15)" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-secondary" />
      <CardContent className="p-6 sm:p-8">
        <Badge className={`mb-4 border-0 ${course.badgeClass}`}>{course.badge}</Badge>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Badge className="bg-secondary/20 text-secondary border-0">{course.tag}</Badge>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-heading">{course.title}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">{course.desc}</p>
            <ul className="space-y-2">
              {course.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <MetaIcon size={14} />
                {course.meta}
              </div>
              {course.showRating && <Stars />}
            </div>
            {course.disclaimer && (
              <div className="flex items-start gap-2 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-secondary" />
                <span>{course.disclaimer}</span>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <PriceDisplay price={course.price} inView={inView} large />
            {course.promotion && (
              <div className="w-full max-w-xs rounded-lg border border-secondary/30 bg-secondary/10 px-4 py-3 text-center">
                <p className="font-heading text-lg font-bold text-secondary">
                  Early bird ₹{course.promotion.price.toLocaleString("en-IN")}
                </p>
                <p className="mt-1 text-xs text-foreground/65">
                  Use code <span className="font-mono font-semibold text-heading">{course.promotion.code}</span> · {course.promotion.note}
                </p>
              </div>
            )}
            <Button className="glow-btn w-full max-w-xs text-base py-5" asChild>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                Enroll Now <ExternalLink size={16} className="ml-1" />
              </a>
            </Button>
            <span className="text-muted-foreground text-xs">Secure payment via Topmate</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductCard = ({ p, inView }: { p: Product; inView: boolean }) => (
  <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full flex flex-col">
    <CardContent className="p-6 flex flex-col flex-1 gap-3">
      <div className="flex items-center gap-2">
        <Badge className={`${p.tagColor} border-0`}>{p.tag}</Badge>
        {p.popular && <Badge className="bg-secondary/20 text-secondary border-0 text-[10px]">Popular</Badge>}
        {p.comingSoon && (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-0 text-[10px]">Coming Soon</Badge>
        )}
      </div>
      <h3 className="font-heading font-semibold text-heading text-base">{p.title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed flex-1">{p.desc}</p>
      <PriceDisplay price={p.price} inView={inView} />
      {p.comingSoon ? (
        <Button
          variant="outline"
          className="w-full border-muted-foreground/30 text-muted-foreground cursor-not-allowed mt-auto"
          disabled
        >
          Coming Soon
        </Button>
      ) : (
        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 mt-auto" asChild>
          <a href={p.link} target="_blank" rel="noopener noreferrer">
            Get Access <ExternalLink size={14} className="ml-1" />
          </a>
        </Button>
      )}
    </CardContent>
  </Card>
);

const ProductCarousel = ({ products, inView }: { products: Product[]; inView: boolean }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const onSlideSelect = useCallback(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSlideSelect();
    api.on("select", onSlideSelect);
    return () => {
      api.off("select", onSlideSelect);
    };
  }, [api, onSlideSelect]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]}
        opts={{ loop: true, align: "center" }}
        className="w-full"
      >
        <CarouselContent className="-ml-3">
          {products.map((p) => (
            <CarouselItem key={p.title} className="pl-3 basis-[85%]">
              <ProductCard p={p} inView={inView} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-primary w-6" : "bg-muted-foreground/30"
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ITEMS_PER_PAGE = 6;

const DesktopProductGrid = ({ products, inView }: { products: Product[]; inView: boolean }) => {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paged = useMemo(() => products.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE), [products, page]);

  return (
    <div className="hidden sm:block mb-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {paged.map((p, i) => (
          <motion.div key={p.title} {...fadeUp(0.05 + i * 0.05)}>
            <ProductCard p={p} inView={inView} />
          </motion.div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-6">
          <Button
            variant="outline"
            size="icon"
            className="border-primary/30 text-primary hover:bg-primary/10 h-8 w-8"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <ChevronLeft size={16} />
          </Button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                page === i ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
          <Button
            variant="outline"
            size="icon"
            className="border-primary/30 text-primary hover:bg-primary/10 h-8 w-8"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

const Courses = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    onSelect();
    carouselApi.on("select", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, onSelect]);

  return (
    <section id="courses" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            Learn With Us
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Premium courses, tools, and resources to level up your cybersecurity skills. All products delivered via
            Topmate.
          </p>
        </motion.div>

        {/* Featured Courses */}
        <div className="space-y-8 mb-10">
          {featuredCourses.map((course, index) => (
            <motion.div key={course.title} {...fadeUp(0.1 + index * 0.08)}>
              <FeaturedCourseCard course={course} inView={inView} />
            </motion.div>
          ))}
        </div>

        {/* Product Grid - Desktop/Tablet with pagination */}
        <DesktopProductGrid products={products} inView={inView} />

        {/* Product Carousel - Mobile */}
        <div className="sm:hidden mb-12">
          <ProductCarousel products={products} inView={inView} />
        </div>

        {/* Bottom CTA */}
        <motion.div className="text-center mb-16" {...fadeUp(0.3)}>
          <p className="text-foreground/60 mb-4">Explore all courses, tools & mentorship sessions</p>
          <Button className="glow-btn px-8 py-5 text-base" asChild>
            <a href="https://topmate.io/cyberdravida" target="_blank" rel="noopener noreferrer">
              Visit Our Store <ExternalLink size={16} className="ml-1" />
            </a>
          </Button>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div {...fadeUp(0.35)} className="max-w-2xl mx-auto">
          <Carousel
            setApi={setCarouselApi}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
            opts={{ loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-card border-border text-center">
                    <CardContent className="p-8 space-y-4">
                      <Quote size={32} className="text-muted-foreground/30 mx-auto" />
                      <Stars />
                      <p className="text-foreground/80 italic leading-relaxed">"{t.quote}"</p>
                      <p className="text-muted-foreground text-sm italic">"{t.translation}"</p>
                      <p className="text-muted-foreground text-sm font-medium">— {t.author}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
