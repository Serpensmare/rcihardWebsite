import { GraduationCap, Award, Briefcase } from "lucide-react";

const timeline = [
  {
    company: "Trafigura",
    period: "25 Years",
    roles: [
      { title: "Global Training & Development Manager", duration: "9 years" },
      { title: "Operations Manager", duration: "13 years" },
      { title: "Systems Integration", duration: "3 years" },
    ],
    highlight: true,
  },
  {
    company: "Credit Suisse",
    period: "Banking",
    roles: [{ title: "Financial Services", duration: "" }],
    highlight: false,
  },
  {
    company: "Société Générale",
    period: "Banking",
    roles: [{ title: "Financial Services", duration: "" }],
    highlight: false,
  },
  {
    company: "ANZ Bank",
    period: "Banking",
    roles: [{ title: "Financial Services", duration: "" }],
    highlight: false,
  },
];

const credentials = [
  { abbr: "BCOM", full: "Bachelor of Commerce" },
  { abbr: "MBA", full: "Master of Business Administration" },
  { abbr: "CPCC", full: "Certified Professional Co-Active Coach" },
  { abbr: "PCC", full: "Professional Certified Coach (ICF)" },
  { abbr: "ORSC", full: "Organization & Relationship Systems Certified" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-medium mb-4">
            Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Experience That Matters
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-border" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.company}
                  className={`relative pl-16 ${
                    item.highlight ? "scale-100" : "scale-95 opacity-80"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 top-1 w-5 h-5 rounded-full border-4 ${
                      item.highlight
                        ? "bg-accent border-accent/30"
                        : "bg-muted border-border"
                    }`}
                  />
                  
                  <div className={`p-6 rounded-xl ${item.highlight ? "card-elevated" : "bg-muted/30"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className={`w-5 h-5 ${item.highlight ? "text-accent" : "text-muted-foreground"}`} />
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {item.company}
                      </h3>
                      <span className={`text-sm px-2 py-0.5 rounded-full ${
                        item.highlight
                          ? "bg-accent/10 text-accent"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.period}
                      </span>
                    </div>
                    
                    {item.roles.map((role) => (
                      <div key={role.title} className="flex justify-between items-center text-sm text-muted-foreground mb-1">
                        <span>{role.title}</span>
                        {role.duration && (
                          <span className="text-accent font-medium">{role.duration}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:sticky lg:top-32">
            <div className="card-elevated p-8 md:p-10">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                From Corporate Leader to Your Coaching Partner
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                After 30 years navigating the complexities of global corporate environments, 
                I've transformed my experience into a coaching practice dedicated to helping 
                leaders like you reach your goals. My approach combines authenticity, 
                accountability, and the drive to unlock your full potential.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Award className="w-5 h-5 text-accent" />
                  <span>Worked across 4 continents with diverse teams</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span>Trained hundreds of professionals globally</span>
                </div>
              </div>
              
              {/* Credentials */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-sm font-medium text-muted-foreground mb-4">
                  Credentials & Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {credentials.map((cred) => (
                    <div
                      key={cred.abbr}
                      className="group relative px-3 py-1.5 rounded-md bg-navy/5 hover:bg-accent/10 transition-colors cursor-help"
                    >
                      <span className="text-sm font-semibold text-navy group-hover:text-accent transition-colors">
                        {cred.abbr}
                      </span>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-navy text-primary-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        {cred.full}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-navy" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
