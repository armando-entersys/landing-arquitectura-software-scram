'use client';

export const HeroVisual = () => {
  return (
    <div className="w-full rounded-card overflow-hidden shadow-card-hover">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full aspect-video"
      >
        <source src="/videos/SCRAM_Promocional_landing.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
