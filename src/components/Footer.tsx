import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#services" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/[0.08] bg-[#07070b]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(148,163,184,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.4)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-500/60 via-white/15 to-cyan-400/60" />

      <div className="container relative mx-auto px-4 py-10 sm:py-12">
        <div className="grid gap-9 border-b border-white/[0.07] pb-9 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-start">
          <div className="max-w-sm">
            <a href="#hero" className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <img src="/CDTRANS.png" alt="Cyber Dravida" className="h-11 w-11 object-contain" />
              <div>
                <p className="font-heading text-lg font-bold text-heading">Cyber Dravida</p>
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-cyan-300/55">Karnataka, India</p>
              </div>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-foreground/45">
              Practical cybersecurity education, awareness, and investigation-focused community building.
            </p>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/30">Navigate</p>
            <nav className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-foreground/55 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/30">Connect</p>
            <a
              href="mailto:cyberdravida@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              cyberdravida@gmail.com
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <div className="mt-5 flex gap-2">
              <a href="https://instagram.com/cyberdravida" target="_blank" rel="noopener noreferrer" aria-label="Cyber Dravida on Instagram" className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/15 bg-red-500/[0.06] text-red-300 transition hover:bg-red-500/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/company/cyberdravida" target="_blank" rel="noopener noreferrer" aria-label="Cyber Dravida on LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/15 bg-cyan-500/[0.06] text-cyan-300 transition hover:bg-cyan-500/[0.11] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-foreground/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Cyber Dravida. All rights reserved.</p>
          <p>Educational, ethical, and authorised security use only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
