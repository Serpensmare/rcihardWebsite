import { TreePine, Quote } from "lucide-react";
import richardPhoto from "@/assets/richard-profile.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image & Personal Touch */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={richardPhoto}
                alt="Richie Cannane"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Personal touch card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 max-w-xs bg-card rounded-xl p-6 shadow-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <TreePine className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Personal Touch</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                Perennial forest & lake bathing enthusiast – finding clarity in nature to bring clarity to coaching.
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pl-6">
            <span className="inline-block text-accent font-medium mb-4">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Hi, I'm Richie Cannane
            </h2>
            
            <p className="text-xl text-accent font-display italic mb-8">
              What's your biggest challenge today?
            </p>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In a world filled with uncertainty and constant change, my coaching philosophy 
                centers on helping you show up with <strong className="text-foreground">full permission</strong> – 
                permission to be authentic, to take risks, and to lead with confidence.
              </p>
              
              <p>
                Having navigated my own transitions from operations to training to coaching, 
                I understand the courage it takes to step into the unknown. My role is to be 
                your thinking partner, challenging you to see beyond your current perspective 
                while supporting you every step of the way.
              </p>
              
              <p>
                Together, we'll uncover what's holding you back, clarify your goals, and 
                build the momentum you need to achieve them.
              </p>
            </div>
            
            {/* Quote */}
            <div className="mt-10 p-6 rounded-xl bg-navy/5 border-l-4 border-accent relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
              <p className="text-foreground font-display text-lg italic">
                "Authenticity, accountability, and the drive to help you become the leader you're meant to be."
              </p>
              <span className="block mt-3 text-sm text-muted-foreground">— Richie Cannane</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
