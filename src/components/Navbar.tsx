import { useState, useEffect, useRef, useCallback } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Courses", href: "#courses" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "services", "courses", "stats", "events", "team", "blog", "contact"];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [glassStyle, setGlassStyle] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, true);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        if (visibleSections.size > 0) {
          // Re-measure fresh positions to pick the section closest to top
          let topSection = "";
          let minTop = Infinity;
          visibleSections.forEach((_, id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const top = Math.abs(el.getBoundingClientRect().top - 64);
            if (top < minTop) {
              minTop = top;
              topSection = id;
            }
          });
          if (topSection) setActiveSection(topSection);
        }
      },
      { threshold: 0.2, rootMargin: "-64px 0px -30% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const updateGlassPosition = useCallback(() => {
    const activeLink = linkRefs.current.get(activeSection);
    const container = navContainerRef.current;
    if (!activeLink || !container) {
      setGlassStyle(null);
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    setGlassStyle({
      left: linkRect.left - containerRect.left - 8,
      width: linkRect.width + 16,
    });
  }, [activeSection]);

  useEffect(() => {
    updateGlassPosition();
    window.addEventListener("resize", updateGlassPosition);
    return () => window.removeEventListener("resize", updateGlassPosition);
  }, [updateGlassPosition]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href.replace("#", ""));
    setOpen(false);
  };

  const setLinkRef = useCallback((el: HTMLAnchorElement | null, id: string) => {
    if (el) {
      linkRefs.current.set(id, el);
    }
  }, []);

  const linkClass = (href: string) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    return `relative z-10 text-sm transition-colors duration-200 ${isActive ? "text-primary-foreground font-medium" : "text-foreground/70 hover:text-primary"}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border ${
        scrolled ? "bg-background/90 backdrop-blur-lg" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="flex items-center gap-2">
          <img src="/CDTRANS.png" alt="Cyber Dravida" className="h-10 w-10 object-contain" />
          <span className="font-heading text-lg font-bold text-heading">Cyber Dravida</span>
        </a>

        <div className="hidden md:flex items-center gap-1 relative" ref={navContainerRef}>
          {/* Liquid glass pill */}
          {glassStyle && (
            <div
              className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full pointer-events-none"
              style={{
                left: glassStyle.left,
                width: glassStyle.width,
                transition: "left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.85), hsl(var(--primary) / 0.6))",
                boxShadow: "0 0 20px hsl(var(--primary) / 0.35), inset 0 1px 1px hsl(var(--primary-foreground) / 0.15), 0 4px 12px hsl(var(--primary) / 0.2)",
                backdropFilter: "blur(12px)",
                border: "1px solid hsl(var(--primary) / 0.3)",
              }}
            />
          )}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              ref={(el) => setLinkRef(el, link.href.replace("#", ""))}
              onClick={(e) => handleClick(e, link.href)}
              className={linkClass(link.href) + " px-3 py-1.5"}
            >
              {link.label}
            </a>
          ))}
          <Button className="glow-btn ml-4" onClick={() => scrollTo("contact")}>Join Us</Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-background border-b border-border pt-12">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-4 pb-6">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className={`text-base py-2 px-3 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-primary-foreground font-medium"
                          : "text-foreground/70 hover:text-primary"
                      }`}
                      style={isActive ? {
                        background: "linear-gradient(135deg, hsl(var(--primary) / 0.85), hsl(var(--primary) / 0.6))",
                        boxShadow: "0 0 14px hsl(var(--primary) / 0.3)",
                      } : {}}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <Button className="glow-btn w-full mt-2" onClick={() => { scrollTo("contact"); setOpen(false); }}>Join Us</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
