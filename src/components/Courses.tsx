import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Star, Users, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useSiteData } from "@/contexts/SiteDataContext";

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
        {p.popular && <Badge className="bg-secondary/20 text-secondary border-0 text-[10px]">Popular</Badge>}
        {p.comingSoon && <Badge className="bg-yellow-500/20 text-yellow-400 border-0 text-[10px]">Coming Soon</Badge>}
      </div>
      <h3 className="font-heading font-semibold text-heading text-base">{p.title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed flex-1">{p.desc}</p>
      <PriceDisplay price={p.price} inView={inView} />
      {p.comingSoon ? (
        <Button variant="outline" className="w-full border-muted-foreground/30 text-muted-foreground cursor-not-allowed mt-auto" disabled>Coming Soon</Button>
      ) : (
        <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 mt-auto" asChild>
          <a href={p.link} target="_blank" rel="noopener noreferrer">Get Access <ExternalLink size={14} className="ml-1" /></a>
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
      <Carousel setApi={setApi} plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]} opts={{ loop: true, align: "center" }} className="w-full">
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
          <button key={index} onClick={() => api?.scrollTo(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-primary w-6" : "bg-muted-foreground/30"}`} aria-label={`Go to product ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

const ITEMS_PER_PAGE = 6;

const DesktopProductGrid = ({ products, inView }: { products: any[]; inView: boolean }) => {
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
          <Button variant="outline" size="icon" className="border-primary/30 text-primary hover:bg-primary/10 h-8 w-8" onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}><ChevronLeft size={16} /></Button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${page === i ? "bg-primary w-6" : "bg-muted-foreground/30"}`} aria-label={`Page ${i + 1}`} />
          ))}
          <Button variant="outline" size="icon" className="border-primary/30 text-primary hover:bg-primary/10 h-8 w-8" onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}><ChevronRight size={16} /></Button>
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
  const { data } = useSiteData();
  const courses = data.courses;

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
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-3 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
            {courses.heading}
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">{courses.subheading}</p>
        </motion.div>

        {/* Featured Course */}
        <motion.div {...fadeUp(0.1)}>
          <Card className="bg-card border-border relative overflow-hidden mb-10" style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.15)" }}>
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary to-secondary" />
            <CardContent className="p-6 sm:p-8">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0">
                {courses.featured.salesBadge}
              </Badge>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Badge className="bg-secondary/20 text-secondary border-0">{courses.featured.categoryTag}</Badge>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-heading">{courses.featured.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{courses.featured.description}</p>
                  <ul className="space-y-2">
                    {courses.featured.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check size={16} className="text-primary shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <Users size={14} />{courses.featured.enrolledText}
                    </div>
                    <Stars />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <PriceDisplay price={courses.featured.price} inView={inView} large />
                  <Button className="glow-btn w-full max-w-xs text-base py-5" asChild>
                    <a href={courses.featured.link} target="_blank" rel="noopener noreferrer">
                      {courses.featured.ctaText} <ExternalLink size={16} className="ml-1" />
                    </a>
                  </Button>
                  <span className="text-muted-foreground text-xs">Secure payment via Topmate</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <DesktopProductGrid products={courses.products} inView={inView} />

        <div className="sm:hidden mb-12">
          <ProductCarousel products={courses.products} inView={inView} />
        </div>

        <motion.div className="text-center mb-16" {...fadeUp(0.3)}>
          <p className="text-foreground/60 mb-4">{courses.bottomCtaText}</p>
          <Button className="glow-btn px-8 py-5 text-base" asChild>
            <a href={courses.bottomCtaLink} target="_blank" rel="noopener noreferrer">
              Visit Our Store <ExternalLink size={16} className="ml-1" />
            </a>
          </Button>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div {...fadeUp(0.35)} className="max-w-2xl mx-auto">
          <Carousel setApi={setCarouselApi} plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {courses.testimonials.map((t, index) => (
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
          <div className="flex justify-center gap-2 mt-4">
            {courses.testimonials.map((_, index) => (
              <button key={index} onClick={() => carouselApi?.scrollTo(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${current === index ? "bg-primary w-6" : "bg-muted-foreground/30"}`} aria-label={`Go to testimonial ${index + 1}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
