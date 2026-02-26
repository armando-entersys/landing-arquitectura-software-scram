'use client';

import { useState } from 'react';
import Image from 'next/image';

const YOUTUBE_ID = 'hJYAU8j-tqI';
const THUMBNAIL_URL = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

export const HeroVisual = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full rounded-card overflow-hidden shadow-card-hover bg-scram-dark">
      {playing ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
          title="SCRAM Promocional"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="relative w-full aspect-video group cursor-pointer block"
          aria-label="Reproducir video"
        >
          {/* YouTube thumbnail */}
          <Image
            src={THUMBNAIL_URL}
            alt="SCRAM Promocional — click para reproducir"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-scram-primary rounded-full flex items-center justify-center shadow-button group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 md:w-9 md:h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10 md:px-6 md:pb-5 md:pt-14">
            <p className="font-body text-sm md:text-base text-white/90 font-medium">
              Ver video promocional
            </p>
          </div>
        </button>
      )}
    </div>
  );
};
