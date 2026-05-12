import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import bottlesDuo from "@/assets/viora-bottles-duo.png";

const FactoryVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

    const videoUrl = "https://res.cloudinary.com/dwzqh0lpl/video/upload/v1778611382/factory_1_ciea2u.mp4";

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

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
                ref={videoRef}
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

            {/* Mute/Unmute button */}
            {!hasError && (
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white text-xs font-body font-semibold px-3 py-2 rounded-full backdrop-blur-sm transition-all"
                aria-label={muted ? "Unmute video" : "Mute video"}
              >
                {muted ? (
                  <>
                    <VolumeX className="h-4 w-4" />
                    <span>Tap for sound</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="h-4 w-4" />
                    <span>Mute</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryVideo;