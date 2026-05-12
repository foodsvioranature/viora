import { Leaf, Shield, Factory, Droplets, Award, Heart } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Own Manufacturing Unit",
    desc: "Cold pressed in our own facility in Kanpur — no middlemen, no adulteration.",
  },
  {
    icon: Droplets,
    title: "100% Cold Pressed",
    desc: "Extracted without heat to preserve natural nutrients, aroma, and pungency.",
  },
  {
    icon: Shield,
    title: "FSSAI Certified",
    desc: "Fully compliant with Indian food safety standards and lab-tested for purity.",
  },
  {
    icon: Leaf,
    title: "No Chemicals Added",
    desc: "Zero preservatives, zero additives. Just pure black mustard oil, nothing else.",
  },
  {
    icon: Award,
    title: "Direct Manufacturer Price",
    desc: "Buy directly from the source — premium quality at honest, factory-direct pricing.",
  },
  {
    icon: Heart,
    title: "Rich in Health Benefits",
    desc: "High in MUFA, Vitamin E & K. Trans fat free, soy free, and GMO free.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-spacing bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Why Viora
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.15 * i}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <r.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {r.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
