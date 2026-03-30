import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, Instagram, Linkedin, Twitter, Send, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const contactInfo = [
  { icon: Mail, label: "Email", value: "cyberdravida@gmail.com", href: "mailto:cyberdravida@gmail.com" },
  { icon: MapPin, label: "Location", value: "Karnataka, India", href: undefined },
  { icon: Globe, label: "Website", value: "cyberdravida.in", href: "https://www.cyberdravida.in/" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/cyberdravida", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/cyberdravida", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/cyberdravida", label: "X / Twitter" },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);
  const isMobile = useIsMobile();
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
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "4778d335-d991-4bb0-9e1c-40a995012eda",
          subject: "New Contact from Cyber Dravida Website",
          name: data.name,
          email: data.email,
          message: data.message,
          "h-captcha-response": captchaToken,
        }),
      });
      const result = await res.json();
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
    <section id="contact" className="py-20 overflow-x-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div className="text-center mb-14" {...fadeUp(0)}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#06b6d4] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Have a question or want to collaborate? Reach out to us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — Form */}
          <motion.div {...fadeUp(0.1)} className="min-w-0 bg-card border border-border rounded-xl p-6 sm:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-center min-h-[78px] overflow-hidden">
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
                <Button type="submit" size="lg" className="w-full glow-btn gap-2" disabled={loading || !captchaToken}>
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>

          {/* Right — Info */}
          <motion.div {...fadeUp(0.2)} className="min-w-0 bg-card border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4" key={item.label}>
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wide">{item.label}</p>
                      <p className="text-foreground text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>

            {/* Socials */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-foreground/50 text-xs uppercase tracking-wide mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <s.icon className="h-4 w-4 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
