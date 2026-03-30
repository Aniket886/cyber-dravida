import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, Users, Quote, ExternalLink } from "lucide-react";
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

const featuredFeatures = [
  "Clear Web & Darkweb mastery",
  "Real-world investigative skills",
  "Crypto transaction tracking",
  "Professional OpSec techniques",
  "Pre-recorded — learn at your own pace",
];

const products = [
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
    link: "#",
    popular: false,
    comingSoon: true,
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
    <span className={`font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent ${large ? "text-3xl sm:text-4xl" : "text-xl"}`}>
      ₹{formatted}
    </span>
  );
};

const ProductCard = ({ p, inView }: { p: any; inView: boolean }) => (
  <Card className="bg-card border-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full flex flex-col">
    <CardContent className="p-6 flex flex-col flex-1 gap-3">
      <div className="flex items-center gap-2">
        <Badge className={`${p.tagColor} border-0`}>{p.tag}</Badge>
        {p.popular && (
          <Badge className="bg-secondary/20 text-secondary border-0 text-[10px]">Popular</Badge>
        )}
        {(p as any).comingSoon && (
          <Badge className="bg-yellow-500/20 text-yellow-400 border-0 text-[10px]">Coming Soon</Badge>
        )}
      </div>
      <h3 className="font-heading font-semibold text-heading text-base">{p.title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed flex-1">{p.desc}</p>
      <PriceDisplay price={p.price} inView={inView} />
      {(p as any).comingSoon ? (
        <Button variant="outline" className="w-full border-muted-foreground/30 text-muted-foreground cursor-not-allowed mt-auto" disabled>
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

const ProductCarousel = ({ products, inView }: { products: any[]; inView: boolean }) => {
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
    return () => { api.off("select", onSlideSelect); };
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
          {products.map((p: any) => (
            <CarouselItem key={p.title} className="pl-3 basis-[85%]">
              <ProductCard p={p} inView={inView} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
        {products.map((_: any, index: number) => (
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
    return () => { carouselApi.off("select", onSelect); };
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
            Premium courses, tools, and resources to level up your cybersecurity skills. All products delivered via Topmate.
          </p>
        </motion.div>

        {/* Featured Course */}
        <motion.div {...fadeUp(0.1)}>
          <Card className="bg-card border-border relative overflow-hidden mb-10"
            style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.15)" }}>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-secondary" />
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                🔥 Most Popular
              </Badge>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Badge className="bg-secondary/20 text-secondary border-0">OSINT</Badge>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-heading">
                    Advanced OSINT Investigation Course (ಕನ್ನಡ)
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Master digital forensics, crypto tracking, and the darkweb. A practical roadmap to professional intelligence — taught entirely in Kannada.
                  </p>
                  <ul className="space-y-2">
                    {featuredFeatures.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check size={16} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Users size={14} />
                      6+ Students Enrolled
                    </div>
                    <Stars />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <PriceDisplay price={5999} inView={inView} large />
                  <Button className="glow-btn w-full max-w-xs text-base py-5" asChild>
                    <a href="https://topmate.io/cyberdravida/1882730" target="_blank" rel="noopener noreferrer">
                      Enroll Now <ExternalLink size={16} className="ml-1" />
                    </a>
                  </Button>
                  <span className="text-muted-foreground text-xs">Secure payment via Topmate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
                      <p className="text-foreground/80 italic leading-relaxed">
                        "{t.quote}"
                      </p>
                      <p className="text-muted-foreground text-sm italic">
                        "{t.translation}"
                      </p>
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
