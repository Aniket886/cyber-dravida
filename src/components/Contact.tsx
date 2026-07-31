import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  Instagram,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  Send,
  ShieldCheck,
  Twitter,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "cyberdravida@gmail.com", href: "mailto:cyberdravida@gmail.com" },
  { icon: MapPin, label: "Location", value: "Davangere, Karnataka, India" },
  { icon: Globe, label: "Official Links", value: "linktr.ee/cyberdravida", href: "https://linktr.ee/cyberdravida", external: true },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/cyberdravida", label: "Instagram", color: "text-red-300" },
  { icon: Linkedin, href: "https://linkedin.com/company/cyberdravida", label: "LinkedIn", color: "text-cyan-300" },
  { icon: Twitter, href: "https://twitter.com/cyberdravida", label: "X / Twitter", color: "text-blue-300" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    if (!captchaToken) {
      toast({ title: "Please complete the captcha", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "48ab1754-bfc7-4660-a5f7-91be43bb5e92",
          subject: "New Contact from Cyber Dravida Website",
          name: data.name,
          email: data.email,
          message: data.message,
          "h-captcha-response": captchaToken,
        }),
      });
      const result = await response.json();

      if (result.success) {
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        form.reset();
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      } else {
        toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Network error", description: "Please check your connection.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(148,163,184,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.45)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="pointer-events-none absolute -left-24 top-14 h-80 w-80 rounded-full bg-red-500/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-96 w-96 rounded-full bg-cyan-500/[0.05] blur-3xl" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="mx-auto mb-8 max-w-3xl text-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduceMotion ? 0 : 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary">Secure Contact</p>
          <h2 className="mt-3 bg-gradient-to-r from-red-300 via-heading to-cyan-300 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl">
            Start a conversation.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/50 sm:text-base">
            Ask about courses, institutional programs, research collaboration, or community participation.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-red-500/25 bg-[linear-gradient(118deg,rgba(127,29,29,0.11),hsl(var(--card)/0.82)_46%,rgba(8,145,178,0.11))] shadow-[0_28px_90px_hsl(var(--background)/0.62)] backdrop-blur-xl"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-red-500/30" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 rounded-r-[inherit] border-y border-r border-cyan-500/35" />
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-slate-200/30 to-cyan-400" />

          <div className="relative grid lg:grid-cols-[1.06fr_0.94fr]">
            <div className="border-b border-white/[0.08] p-6 sm:p-7 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-red-300/60">Message Form</p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-heading sm:text-2xl">Send us the details</h3>
                  <p className="mt-2 text-sm text-foreground/45">Fields are validated before secure submission.</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/[0.08] text-red-300">
                  <MessageSquareText className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-foreground/60">Name</FormLabel>
                        <FormControl>
                          <Input className="h-11 border-white/10 bg-background/45 focus-visible:ring-cyan-400" placeholder="Your name" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-foreground/60">Email</FormLabel>
                        <FormControl>
                          <Input className="h-11 border-white/10 bg-background/45 focus-visible:ring-cyan-400" type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-foreground/60">Message</FormLabel>
                        <FormControl>
                          <Textarea className="min-h-28 resize-y border-white/10 bg-background/45 focus-visible:ring-cyan-400" placeholder="Tell us what you would like to discuss..." rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex min-h-[78px] w-full justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-background/25 py-2">
                    <div className="w-fit max-w-full">
                      <HCaptcha
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        size={isMobile ? "compact" : "normal"}
                        onVerify={(token) => setCaptchaToken(token)}
                        onExpire={() => setCaptchaToken(null)}
                        ref={captchaRef}
                        theme="dark"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 border-0 bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.18)] hover:from-red-500 hover:to-blue-500"
                    disabled={loading || !captchaToken}
                  >
                    {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                    {loading ? "Sending..." : "Send Secure Message"}
                  </Button>
                </form>
              </Form>

              <div className="mt-4 flex items-center gap-2 text-xs text-foreground/35">
                <ShieldCheck className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                Protected by hCaptcha and submitted through Web3Forms.
              </div>
            </div>

            <div className="flex flex-col p-6 sm:p-7">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/60">Direct Channels</p>
                <h3 className="mt-2 font-heading text-xl font-bold text-heading sm:text-2xl">Reach Cyber Dravida</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/45">Use the channel that best fits your enquiry.</p>
              </div>

              <div className="mt-5 divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="group flex items-center gap-4 py-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/15 bg-cyan-500/[0.06] text-cyan-300 transition group-hover:bg-cyan-500/[0.11]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[8px] uppercase tracking-[0.17em] text-foreground/30">{item.label}</p>
                        <p className="mt-1 break-words text-sm font-medium text-foreground/70">{item.value}</p>
                      </div>
                      {item.href && <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/25 transition group-hover:text-cyan-300" aria-hidden="true" />}
                    </div>
                  );

                  if (!item.href) return <div key={item.label}>{content}</div>;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>

              <div className="relative mt-5 overflow-hidden rounded-2xl border border-cyan-500/15 bg-background/35">
                <iframe
                  title="Cyber Dravida location in Davangere, Karnataka"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=75.8950%2C14.4300%2C75.9500%2C14.5000&layer=mapnik&marker=14.4644%2C75.9218"
                  width="100%"
                  height="160"
                  style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) brightness(0.82) contrast(1.12)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg border border-white/10 bg-background/85 px-3 py-2 backdrop-blur-md">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-cyan-300/60">Operating from</p>
                  <p className="mt-1 text-xs font-semibold text-heading">Davangere, Karnataka</p>
                </div>
              </div>

              <div className="mt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/30">Follow the community</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-semibold transition hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${social.color}`}
                    >
                      <social.icon className="h-4 w-4" aria-hidden="true" />
                      {social.label}
                      <ExternalLink className="h-3 w-3 opacity-45" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
