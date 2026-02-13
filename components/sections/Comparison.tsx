'use client';

import { useContent } from '@/lib/i18n/ContentContext';
import { Icon } from '@/components/ui/Icon';
import { X, Check } from 'lucide-react';
import { tracker } from '@/lib/tracking/universal-tracker';

export function Comparison() {
  const { content } = useContent();

  return (
    <section className="py-12 md:py-32 bg-scram-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-scram-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-scram-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-white mb-3 md:mb-6">
            {content.comparison.title}
          </h2>
          <p className="font-body text-base md:text-xl text-white/80">
            {content.comparison.subtitle}
          </p>
        </div>

        <div className="space-y-3 md:space-y-6">
          {content.comparison.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xl rounded-card border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300"
            >
              <div className="p-4 md:p-6">
                {/* Header */}
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-scram-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon} className="text-scram-primary" size={16} />
                  </div>
                  <h3 className="font-heading text-base md:text-xl font-bold text-white">
                    {item.aspect}
                  </h3>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {/* Traditional */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <X className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="hidden md:block font-body text-sm text-white/60 mb-1 uppercase tracking-wide">
                          {content.ui.traditionalMethod}
                        </p>
                        <p className="font-body text-xs md:text-base text-white">
                          {item.traditional}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Agentic Architect */}
                  <div className="bg-scram-secondary/10 border border-scram-secondary/30 rounded-lg p-3 md:p-4">
                    <div className="flex items-start gap-2 md:gap-3">
                      <Check className="text-scram-secondary flex-shrink-0 mt-0.5" size={16} />
                      <div>
                        <p className="hidden md:block font-body text-sm text-white/60 mb-1 uppercase tracking-wide">
                          {content.ui.withAgenticArchitect}
                        </p>
                        <p className="font-body text-xs md:text-base text-white font-medium">
                          {item.agenticArchitect}
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
        <div className="mt-8 md:mt-12 text-center">
          <button
            onClick={() => {
              tracker.trackCTA(content.ui.requestDiagnostic, 'comparison', 'whatsapp');
              const msg = encodeURIComponent(content.ui.whatsAppPricingMsg);
              window.open(`https://wa.me/522211065056?text=${msg}`, '_blank');
            }}
            className="w-full md:w-auto px-8 py-3.5 md:py-4 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-base md:text-lg rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5"
          >
            {content.ui.requestDiagnostic}
          </button>
          <p className="font-body text-xs md:text-sm text-white/60 mt-3 md:mt-4">
            {content.ui.closedBudget48h}
          </p>
        </div>
      </div>
    </section>
  );
}
