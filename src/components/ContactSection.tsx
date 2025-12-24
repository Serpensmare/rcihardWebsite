import { useState } from "react";
import { Phone, Mail, MapPin, Calendar, Languages, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+41 79 908 8921",
    href: "tel:+41799088921",
    action: "Click to call",
  },
  {
    icon: Mail,
    label: "Email",
    value: "richardcannane@gmail.com",
    href: "mailto:richardcannane@gmail.com",
    action: "Send email",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    challenge: "",
    preferredContact: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Richie will get back to you within 24-48 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      challenge: "",
      preferredContact: "email",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding footprint-pattern">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium mb-4">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Book a complimentary 30-minute consultation to explore how coaching can transform your leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Free Consultation Highlight */}
            <div className="card-elevated p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">Free 30-Min Consultation</h3>
                  <p className="text-sm text-muted-foreground">No commitment required</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Discover if we're the right fit. Share your challenges and explore the possibilities together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-navy/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors">
                    <method.icon className="w-5 h-5 text-navy group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium text-foreground">{method.value}</p>
                  </div>
                  <span className="text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    {method.action} →
                  </span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-4">
              <MapPin className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Switzerland-Based</p>
                <p className="text-sm text-muted-foreground">Global Virtual & In-Person Coaching Available</p>
              </div>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-navy/5">
              <Languages className="w-5 h-5 text-accent" />
              <div>
                <p className="text-sm font-medium text-foreground">Fluent in English, French, German</p>
                <p className="text-xs text-muted-foreground">Working proficiency in Chinese</p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-elevated p-8 md:p-10">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+41 XX XXX XXXX"
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-foreground mb-2">
                    What's your biggest challenge? *
                  </label>
                  <Textarea
                    id="challenge"
                    required
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    placeholder="Tell me about the leadership challenge you're facing..."
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Preferred contact method
                  </label>
                  <div className="flex gap-4">
                    {["email", "phone", "either"].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                          formData.preferredContact === option
                            ? "border-accent bg-accent/5 text-accent"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={option}
                          checked={formData.preferredContact === option}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.preferredContact === option ? "border-accent" : "border-muted-foreground"
                        }`}>
                          {formData.preferredContact === option && (
                            <span className="w-2 h-2 rounded-full bg-accent" />
                          )}
                        </span>
                        <span className="text-sm capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="accent"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
