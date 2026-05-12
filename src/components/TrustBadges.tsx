import { Shield, Award, Leaf, FlaskConical, BadgeCheck } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "FSSAI Certified" },
  { icon: Shield, label: "Lab Tested" },
  { icon: Leaf, label: "100% Natural" },
  { icon: FlaskConical, label: "No Chemicals" },
  { icon: Award, label: "Premium Quality" },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="section-container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {badges.map((b, i) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-body text-xs font-semibold text-muted-foreground tracking-wide uppercase">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
