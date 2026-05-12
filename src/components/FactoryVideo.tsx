import { useState } from "react";
import bottlesDuo from "@/assets/viora-bottles-duo.png";

const FactoryVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Replace YOUR_CLOUD_NAME with your actual cloud name
    const videoUrl = "https://res.cloudinary.com/dwzqh0lpl/video/upload/v1778611382/factory_1_ciea2u.mp4";

  return (
    <section id="factory" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Inside Our Factory
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            See How Viora Is Made
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            A glimpse inside our Kanpur facility — from premium seed to sealed bottle.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-elevated max-w-5xl mx-auto opacity-0 animate-fade-up">
          <div className="relative aspect-video bg-secondary">
            {!hasError ? (
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                poster={bottlesDuo}
                className="w-full h-full object-cover"
                onCanPlay={() => setIsLoading(false)}
                onError={() => setHasError(true)}
              />
            ) : (
              <img
                src={bottlesDuo}
                alt="Viora bottles"
                className="w-full h-full object-cover"
              />
            )}

            {isLoading && !hasError && (
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryVideo;