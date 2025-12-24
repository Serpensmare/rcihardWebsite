import { Users, Target, Lightbulb, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Target,
    title: "Executive Coaching",
    description:
      "One-on-one coaching for leaders stepping into new roles, navigating stakeholder relationships, or managing career transitions with confidence.",
    features: [
      "Leadership transitions",
      "Stakeholder management",
      "Career pivots",
      "Performance optimization",
    ],
  },
  {
    icon: Users,
    title: "Team Coaching",
    description:
      "ORSC-certified methodology for leadership teams facing organizational change, building alignment, and enhancing collaborative effectiveness.",
    features: [
      "Team alignment",
      "Change navigation",
      "Conflict resolution",
      "Collective intelligence",
    ],
  },
  {
    icon: Lightbulb,
    title: "Leadership Development",
    description:
      "Tailored training programs and workshops designed to accelerate leadership capabilities across your organization.",
    features: [
      "Custom workshops",
      "Skills development",
      "Group facilitation",
      "Ongoing support",
    ],
  },
];

const challenges = [
  "Stepping into new roles",
  "Becoming a people manager",
  "Changing companies/countries",
  "Handling restructuring",
  "Expanding expertise through networking",
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30 footprint-pattern">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            How I Can Help You
          </h2>
          <p className="text-lg text-muted-foreground">
            Proven coaching methodologies combined with 30 years of corporate leadership experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-elevated p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="group/btn p-0 h-auto text-accent hover:text-accent-foreground hover:bg-transparent" asChild>
                <a href="#contact" className="flex items-center gap-1">
                  Learn more
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Common Challenges Callout */}
        <div className="bg-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 footprint-pattern opacity-5" />
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-display font-semibold text-primary-foreground mb-6">
              Common Challenges I Help Leaders Navigate
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {challenges.map((challenge, index) => (
                <span
                  key={challenge}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm md:text-base"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {challenge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
