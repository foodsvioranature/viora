import processImg from "@/assets/process.jpg";

const steps = [
  { num: "01", title: "Sourcing", desc: "Premium black mustard seeds sourced from trusted Indian farms." },
  { num: "02", title: "Cold Pressing", desc: "Extracted at low temperature to retain all natural nutrients." },
  { num: "03", title: "Filtration", desc: "Naturally filtered without chemicals or artificial processing." },
  { num: "04", title: "Packaging", desc: "Sealed in our facility to ensure freshness and purity." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-spacing bg-secondary text-secondary-foreground overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated opacity-0 animate-fade-up">
            <img
              src={processImg}
              alt="Cold pressing process for mustard oil"
              className="w-full h-[400px] lg:h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-gradient-gold text-secondary font-body text-xs font-bold px-4 py-2 rounded-full tracking-wide uppercase">
                Direct Manufacturer
              </span>
            </div>
          </div>

          {/* Steps */}
          <div>
            <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
              Our Process
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mt-3 mb-10">
              From Seed to Bottle
            </h2>

            <div className="space-y-8">
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  className="flex gap-5 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.2 * i + 0.3}s` }}
                >
                  <span className="font-heading text-4xl font-bold text-primary/40 leading-none min-w-[3rem]">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-secondary-foreground mb-1">
                      {s.title}
                    </h3>
                    <p className="font-body text-secondary-foreground/70 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
