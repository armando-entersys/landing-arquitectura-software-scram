'use client';

import { content } from '@/content/copy';

export function ClientLogos() {
  return (
    <section className="py-10 md:py-16 bg-scram-dark">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="font-heading text-2xl md:text-4xl font-bold italic text-white mb-2 md:mb-4">
            {content.clientLogos.title}
          </h2>
          <p className="font-body text-sm md:text-lg text-white/80">
            {content.clientLogos.subtitle}
          </p>
        </div>

        {/* Mobile: 3 cols compact. Desktop: 6 cols */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-6">
          {content.clientLogos.categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-card p-3 md:p-6 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <p className="font-body text-[10px] md:text-sm text-white text-center font-medium leading-tight">
                {category}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-scram-secondary/20 border border-scram-secondary px-4 py-2 md:px-6 md:py-3 rounded-pill">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-scram-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-body text-xs md:text-sm text-white font-semibold">
              +50 proyectos entregados en México
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
