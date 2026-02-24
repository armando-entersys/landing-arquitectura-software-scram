'use client';

import Image from 'next/image';

const TEC_IMAGES = [
  { src: '/images/cases/tec/tec-login.webp', alt: 'MiTec Login' },
  { src: '/images/cases/tec/tec-registro.webp', alt: 'MiTec Registro' },
  { src: '/images/cases/tec/tec-home.webp', alt: 'MiTec Home' },
  { src: '/images/cases/tec/tec-menu.webp', alt: 'MiTec Menú' },
  { src: '/images/cases/tec/tec-apps.webp', alt: 'MiTec Apps' },
];

export function PhoneSlideshow() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Phone mockup */}
      <div className="relative mx-auto w-[240px] h-[490px] md:w-[280px] md:h-[572px]">
        {/* Phone frame */}
        <div className="absolute inset-0 rounded-[36px] md:rounded-[42px] border-[6px] md:border-[8px] border-scram-dark bg-scram-dark shadow-2xl overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[24px] md:h-[28px] bg-scram-dark rounded-b-2xl z-20" />

          {/* Screen area */}
          <div className="relative w-full h-full rounded-[28px] md:rounded-[34px] overflow-hidden bg-black">
            {TEC_IMAGES.map((img, i) => (
              <div
                key={i}
                className="phone-slide absolute inset-0"
                style={{ animationDelay: `${i * 3}s` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {TEC_IMAGES.map((_, i) => (
          <div
            key={i}
            className="phone-dot w-2 h-2 rounded-full bg-scram-primary"
            style={{ animationDelay: `${i * 3}s` }}
          />
        ))}
      </div>
    </div>
  );
}
