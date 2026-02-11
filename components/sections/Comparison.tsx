'use client';

import { content } from '@/content/copy';
import { Icon } from '@/components/ui/Icon';
import { X, Check } from 'lucide-react';

export function Comparison() {
  return (
    <section className="py-20 md:py-32 bg-scram-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-scram-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-scram-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold italic text-white mb-6">
            {content.comparison.title}
          </h2>
          <p className="font-body text-xl text-white/80">
            {content.comparison.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {content.comparison.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xl rounded-card border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-scram-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon} className="text-scram-primary" size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {item.aspect}
                  </h3>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Traditional */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <X className="text-red-400 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-body text-sm text-white/60 mb-1 uppercase tracking-wide">
                          Método tradicional
                        </p>
                        <p className="font-body text-base text-white">
                          {item.traditional}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Centauro */}
                  <div className="bg-scram-secondary/10 border border-scram-secondary/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Check className="text-scram-secondary flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-body text-sm text-white/60 mb-1 uppercase tracking-wide">
                          Con Centauro
                        </p>
                        <p className="font-body text-base text-white font-medium">
                          {item.centauro}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-10 py-4 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-lg rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5">
            Probar sin riesgo
          </button>
          <p className="font-body text-sm text-white/60 mt-4">
            Primera fase gratis • Sin compromiso
          </p>
        </div>
      </div>
    </section>
  );
}
