import { useState, useEffect } from "react";
import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "services", "stats", "events", "team", "blog", "contact"];

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-64px 0px 0px 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollTo(href.replace("#", ""));
    setOpen(false);
  };

  const linkClass = (href: string) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    return `text-sm transition-colors ${isActive ? "text-primary font-medium" : "text-foreground/70 hover:text-primary"}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border ${
        scrolled ? "bg-background/90 backdrop-blur-lg" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" onClick={(e) => handleClick(e, "#hero")} className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="font-heading text-lg font-bold text-heading">Cyber Dravida</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => handleClick(e, link.href)} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
          <Button className="glow-btn" onClick={() => scrollTo("contact")}>Join Us</Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-5 w-5" /></Button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-background border-b border-border pt-12">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-4 pb-6">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} onClick={(e) => handleClick(e, link.href)} className={linkClass(link.href) + " text-base py-1"}>
                    {link.label}
                  </a>
                ))}
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
