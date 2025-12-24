import { ArrowRight, Award, Globe, Languages, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import richardPhoto from "@/assets/richard-profile.jpeg";

const trustBadges = [
  { icon: Calendar, label: "25+ Years Experience" },
  { icon: Award, label: "PCC Certified" },
  { icon: Globe, label: "Global Expertise" },
  { icon: Languages, label: "EN | FR | DE | CN" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 footprint-pattern opacity-50" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Executive & Leadership Coach
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Transform Your{" "}
                <span className="text-gradient">Leadership</span>{" "}
                Journey
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                Executive & Team Coach | 25+ Years at Trafigura | PCC, CPCC, ORSC Certified
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <Button variant="accent" size="xl" asChild>
                  <a href="#contact" className="group">
                    Book Free 30-Min Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="navy-outline" size="xl" asChild>
                  <a href="#services">Explore Services</a>
                </Button>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-border/50 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustBadges.map((badge, index) => (
                  <div
                    key={badge.label}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card/50 hover-lift"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <badge.icon className="w-5 h-5 text-accent" />
                    <span className="text-xs md:text-sm font-medium text-muted-foreground text-center">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content - Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-navy/20 rounded-full blur-3xl opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-full" />
              
              {/* Main photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={richardPhoto}
                  alt="Richard Cannane - Executive Coach"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Floating accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center animate-float">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
