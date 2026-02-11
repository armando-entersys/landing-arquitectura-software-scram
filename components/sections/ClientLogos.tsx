'use client';

import { content } from '@/content/copy';

const corridorDetails: Record<string, string> = {
  'Bajío & Querétaro': 'Automotriz, Aeroespacial, Manufactura',
  'Monterrey & NL': 'Acero, Manufactura pesada, Logística',
  'CDMX & Edo. Méx': 'Corporativos, Distribución, Comercio',
  'Puebla & Tlaxcala': 'Automotriz, Manufactura, Textil',
  'Guadalajara & Jalisco': 'Electrónica, Alimentos, Logística',
  'Saltillo & Chihuahua': 'Maquiladoras, Automotriz, Electrónica',
};

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

        {/* Industrial corridors as subtle presence indicators */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {content.clientLogos.categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm rounded-lg md:rounded-card p-3 md:p-5 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-scram-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-heading text-xs md:text-sm text-white font-bold leading-tight mb-1">
                {category}
              </p>
              <p className="font-body text-[9px] md:text-xs text-white/60 leading-tight hidden md:block">
                {corridorDetails[category] || ''}
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
              +50 proyectos entregados
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-scram-primary/20 border border-scram-primary px-4 py-2 md:px-5 md:py-2.5 rounded-pill">
            <svg className="w-4 h-4 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="font-body text-xs md:text-sm text-white font-semibold">
              Manufactura, logística y distribución
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
