import { useState } from "react";
import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/strictly-coaching-logo.jpeg";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const credentials = ["BCOM", "MBA", "CPCC", "PCC", "ORSC"];

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You'll receive leadership insights in your inbox.",
    });
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 footprint-pattern opacity-5" />
      
      <div className="container-narrow relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Strictly Coaching"
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Executive coaching that combines authenticity, accountability, and drive to help you become the leader you're meant to be.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:richardcannane@gmail.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Credentials */}
          <div>
            <h4 className="font-display font-semibold mb-6">Credentials</h4>
            <div className="flex flex-wrap gap-2">
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="px-3 py-1 rounded-md bg-primary-foreground/10 text-sm"
                >
                  {cred}
                </span>
              ))}
            </div>
            <div className="mt-6 text-sm text-primary-foreground/70 space-y-1">
              <p>📞 +41 79 908 8921</p>
              <p>✉️ richardcannane@gmail.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-6">Leadership Insights</h4>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Get monthly insights on leadership and personal growth.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-10"
              />
              <Button type="submit" variant="accent" size="sm" className="px-4">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Tagline & Copyright */}
        <div className="py-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
            <span className="font-display italic">Authenticity</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="font-display italic">Accountability</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span className="font-display italic">Drive</span>
          </div>
          
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Strictly Coaching. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
