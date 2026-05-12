const BrandIntro = () => {
  return (
    <section className="section-spacing">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            About Viora
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Purity You Can <span className="text-gradient-gold">Trust</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mb-8 rounded-full" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Viora Nature Foods is a Kanpur-based manufacturer of premium cold pressed black mustard oil. 
            We own our entire production — from sourcing the finest black mustard seeds to cold pressing 
            and packaging in our own state-of-the-art facility.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Every bottle carries the legacy of traditional oil extraction, enhanced with modern food safety 
            standards. No middlemen. No shortcuts. Just pure, honest mustard oil — India's first 100% natural.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandIntro;
