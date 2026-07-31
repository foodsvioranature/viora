import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Dark bar to sit behind the transparent header */}
      <div className="bg-secondary pt-32 pb-16 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
          About <span className="text-gradient-gold">Us</span>
        </h1>
      </div>

      <main className="section-spacing">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Our Story Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-gold rounded-full" />
                <h2 className="font-heading text-3xl font-bold text-foreground">Our Story</h2>
              </div>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                Viora Nature Foods was born out of a simple yet powerful vision: to bring back the purity of traditional Indian foods, starting with our staple cooking medium—mustard oil. Based in the historical city of Kanpur, we recognized a gap in the market where genuine, unadulterated cold-pressed oils were becoming increasingly rare.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                We set out on a mission to build a brand that owns its entire supply chain. From working closely with farmers to select the finest black mustard seeds, to establishing a state-of-the-art cold-pressing facility, we ensure that every drop of Viora Mustard Oil retains its natural pungency, aroma, and nutritional profile.
              </p>
            </section>

            {/* Our Values Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-gold rounded-full" />
                <h2 className="font-heading text-3xl font-bold text-foreground">Our Core Values</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 mt-6">
                <div className="bg-white/50 p-6 rounded-2xl border border-secondary/10">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3">Uncompromising Purity</h3>
                  <p className="font-body text-muted-foreground">We never use chemical solvents, heat extraction, or preservatives. Our oils are 100% natural, capturing the true essence of the seed.</p>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-secondary/10">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3">Transparency</h3>
                  <p className="font-body text-muted-foreground">We believe you have the right to know what you are consuming. We maintain complete transparency in our manufacturing process and ingredient sourcing.</p>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-secondary/10">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3">Traditional Methods</h3>
                  <p className="font-body text-muted-foreground">We use the time-honored Kolhu (wood-pressed) technique, which operates at low temperatures to ensure all essential nutrients are preserved.</p>
                </div>
                <div className="bg-white/50 p-6 rounded-2xl border border-secondary/10">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3">Modern Safety</h3>
                  <p className="font-body text-muted-foreground">While our methods are traditional, our facility strictly adheres to the highest modern food safety and hygiene standards.</p>
                </div>
              </div>
            </section>

            {/* Why Choose Us text integration */}
            <section className="space-y-6">
               <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-gold rounded-full" />
                <h2 className="font-heading text-3xl font-bold text-foreground">The Viora Promise</h2>
              </div>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                When you choose Viora, you are choosing a product made without shortcuts. We do not employ middlemen; we manufacture our own oils to guarantee that you receive exactly what you expect—India's finest 100% natural mustard oil. Every bottle carries our legacy of trust, purity, and uncompromising quality.
              </p>
            </section>

          </div>
        </div>
      </main>
      
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default AboutUs;
