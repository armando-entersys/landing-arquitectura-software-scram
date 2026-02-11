'use client';

import { content } from '@/content/copy';

export function ClientLogos() {
  return (
    <section className="py-16 bg-scram-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold italic text-white mb-4">
            {content.clientLogos.title}
          </h2>
          <p className="font-body text-lg text-white/80">
            {content.clientLogos.subtitle}
          </p>
        </div>

        {/* Animated logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {content.clientLogos.categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-card p-6 flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <p className="font-body text-sm text-white text-center font-medium">
                {category}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-scram-secondary/20 border border-scram-secondary px-6 py-3 rounded-pill">
            <svg className="w-5 h-5 text-scram-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-body text-sm text-white font-semibold">
              +50 proyectos entregados en México
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
