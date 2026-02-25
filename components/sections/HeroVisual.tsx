'use client';

export const HeroVisual = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-card overflow-hidden shadow-card">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/SCRAM_Promocional_landing.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
