import { Button } from "@/components/ui/button";
import { ShoppingBag, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Viora cold pressed oil manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center py-32">
        <span
          className="inline-block text-primary font-body text-sm tracking-[0.4em] uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Since Generations · Kanpur, India
        </span>

        <h1
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Manufacturing Purity.
          <br />
          <span className="text-gradient-gold">Delivering Trust.</span>
        </h1>

        <p
          className="font-body text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          100% Cold Pressed Black Mustard Oil — Extracted in Our Own Facility in Kanpur.
          Pure, unrefined, and full of tradition.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a href="/shop">
            <Button size="lg" className="bg-gradient-gold text-secondary font-semibold text-base px-8 py-6 hover:opacity-90 transition-opacity">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Enter Marketplace
            </Button>
          </a>
          <a href="#products">
            <Button
              variant="outline"
              size="lg"
              className="border-cream/30 text-cream hover:bg-cream/10 font-semibold text-base px-8 py-6"
            >
              Explore Our Products
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </a>
        </div>

        {/* Trust line */}
        <p
          className="mt-12 text-primary/80 text-xs tracking-[0.3em] uppercase font-body opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          FSSAI Certified · Trans Fat Free · GMO Free · Soy Free
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
