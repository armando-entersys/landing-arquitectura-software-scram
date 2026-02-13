'use client';

import { useContent } from '@/lib/i18n/ContentContext';

const categoryIcons: Record<number, JSX.Element> = {
  0: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  1: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
  2: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  3: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  4: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  5: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  ),
};

export function ClientLogos() {
  const { content } = useContent();

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {content.clientLogos.categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-card p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center flex flex-col items-center justify-center gap-2 md:gap-3"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-scram-primary/20 rounded-full flex items-center justify-center">
                {categoryIcons[idx] || null}
              </div>
              <p className="font-heading text-xs md:text-sm text-white font-bold leading-tight">
                {category}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6">
          <div className="inline-flex items-center gap-2 bg-scram-secondary/20 border border-scram-secondary px-4 py-2 md:px-5 md:py-2.5 rounded-pill">
            <svg className="w-4 h-4 text-scram-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-body text-xs md:text-sm text-white font-semibold">
              {content.ui.projectsDelivered}
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-scram-primary/20 border border-scram-primary px-4 py-2 md:px-5 md:py-2.5 rounded-pill">
            <svg className="w-4 h-4 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-body text-xs md:text-sm text-white font-semibold">
              {content.ui.industriesBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
