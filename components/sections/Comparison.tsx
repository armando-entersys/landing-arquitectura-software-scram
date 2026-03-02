'use client';

import { useEffect, useRef, useState } from 'react';
import { useContent } from '@/lib/i18n/ContentContext';
import { Icon } from '@/components/ui/Icon';
import { X, Check } from 'lucide-react';
import { tracker } from '@/lib/tracking/universal-tracker';

/* ── Gauge values (decorative) per comparison aspect ── */
const gaugeData: Record<string, { traditional: number; agentic: number }> = {
  Transparencia: { traditional: 20, agentic: 95 },
  Presupuesto:   { traditional: 30, agentic: 100 },
  Velocidad:     { traditional: 15, agentic: 90 },
  Riesgo:        { traditional: 25, agentic: 95 },
  Calidad:       { traditional: 35, agentic: 98 },
};

/* ── AnimatedGauge sub-component ── */
function AnimatedGauge({
  aspect,
  animate,
}: {
  aspect: string;
  animate: boolean;
}) {
  const values = gaugeData[aspect] ?? { traditional: 25, agentic: 90 };

  return (
    <div className="my-3 md:my-4 space-y-2">
      {/* Traditional bar */}
      <div className="flex items-center gap-2 md:gap-3">
        <span className="hidden md:inline-block text-[11px] uppercase tracking-wider text-red-400/80 w-24 text-right">
          Tradicional
        </span>
        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: animate ? `${values.traditional}%` : '0%' }}
          />
        </div>
        <span
          className="text-xs text-red-400 font-mono w-10 text-right transition-opacity duration-500"
          style={{ opacity: animate ? 1 : 0, transitionDelay: '800ms' }}
        >
          {values.traditional}%
        </span>
      </div>

      {/* Agentic bar */}
      <div className="flex items-center gap-2 md:gap-3">
        <span className="hidden md:inline-block text-[11px] uppercase tracking-wider text-scram-secondary/80 w-24 text-right">
          Agentic
        </span>
        <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-scram-secondary to-emerald-400 rounded-full transition-all duration-1000 ease-out"
            style={{
              width: animate ? `${values.agentic}%` : '0%',
              transitionDelay: '200ms',
              boxShadow: animate
                ? '0 0 12px rgba(68, 206, 111, 0.4), 0 0 4px rgba(68, 206, 111, 0.2)'
                : 'none',
            }}
          />
        </div>
        <span
          className="text-xs text-scram-secondary font-mono w-10 text-right transition-opacity duration-500"
          style={{ opacity: animate ? 1 : 0, transitionDelay: '1000ms' }}
        >
          {values.agentic}%
        </span>
      </div>
    </div>
  );
}

/* ── SVG connector between cards ── */
function CardConnector() {
  return (
    <div className="hidden md:flex justify-center py-1">
      <svg width="2" height="24" viewBox="0 0 2 24" className="opacity-30">
        <line
          x1="1" y1="0" x2="1" y2="24"
          stroke="url(#connGrad)"
          strokeWidth="2"
          strokeDasharray="4 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-8"
            dur="1s"
            repeatCount="indefinite"
          />
        </line>
        <defs>
          <linearGradient id="connGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff9900" />
            <stop offset="100%" stopColor="#44ce6f" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ── Main component ── */
export function Comparison() {
  const { content } = useContent();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);

            // Staggered reveal for cards (pattern from ProcessTimeline)
            const items = entry.target.querySelectorAll('.comparison-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = '1';
                (item as HTMLElement).style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="comparativa"
      ref={sectionRef}
      className="py-12 md:py-32 bg-scram-dark relative overflow-hidden"
    >
      {/* ── Decorative background blurs ── */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-scram-secondary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-scram-primary rounded-full blur-3xl" />
      </div>

      {/* ── Blueprint grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-12">
        {/* ── Header with animated reveal ── */}
        <div
          className="text-center mb-8 md:mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-white mb-3 md:mb-6">
            {content.comparison.title}
          </h2>
          <p className="font-body text-base md:text-xl text-white/80">
            {content.comparison.subtitle}
          </p>
          {/* Decorative gradient bar */}
          <div className="flex justify-center mt-4">
            <div
              className="h-1 rounded-full bg-gradient-to-r from-scram-primary to-scram-secondary transition-all duration-1000 ease-out"
              style={{ width: isVisible ? '8rem' : '0' }}
            />
          </div>
        </div>

        {/* ── Comparison cards ── */}
        <div className="space-y-1 md:space-y-0">
          {content.comparison.items.map((item, idx) => (
            <div key={idx}>
              {/* Card */}
              <div
                className="comparison-item group bg-white/[0.06] backdrop-blur-xl rounded-card border border-white/10 overflow-hidden transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,153,0,0.08)]"
                style={{
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transitionProperty: 'opacity, transform, background-color, border-color, box-shadow',
                }}
              >
                <div className="p-4 md:p-6">
                  {/* Header row */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-scram-primary/15 border border-scram-primary/30 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(255,153,0,0.3)]">
                      <Icon
                        name={item.icon}
                        className="text-scram-primary"
                        size={20}
                      />
                    </div>
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white">
                      {item.aspect}
                    </h3>
                  </div>

                  {/* Animated gauge bars */}
                  <AnimatedGauge aspect={item.aspect} animate={isVisible} />

                  {/* Comparison columns */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {/* Traditional */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 md:p-4">
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="text-red-400" size={12} />
                        </div>
                        <div>
                          <p className="hidden md:block font-body text-[11px] text-white/50 mb-1.5 uppercase tracking-wider">
                            {content.ui.traditionalMethod}
                          </p>
                          <p className="font-body text-xs md:text-sm text-white/80">
                            {item.traditional}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Agentic Architect */}
                    <div className="relative bg-scram-secondary/10 border border-scram-secondary/20 rounded-lg p-3 md:p-4 overflow-hidden">
                      {/* Glow on hover */}
                      <div className="absolute inset-0 bg-scram-secondary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
                      <div className="relative flex items-start gap-2 md:gap-3">
                        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-scram-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-scram-secondary" size={12} />
                        </div>
                        <div>
                          <p className="hidden md:block font-body text-[11px] text-white/50 mb-1.5 uppercase tracking-wider">
                            {content.ui.withAgenticArchitect}
                          </p>
                          <p className="font-body text-xs md:text-sm text-white font-medium">
                            {item.agenticArchitect}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SVG connector between cards (not after last) */}
              {idx < content.comparison.items.length - 1 && <CardConnector />}
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className="mt-8 md:mt-14 text-center transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '1000ms',
          }}
        >
          {/* Score badge */}
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 bg-scram-secondary rounded-full animate-pulse" />
            <span className="font-body text-xs md:text-sm text-white/70">
              Score promedio: <span className="text-red-400">Tradicional 25%</span>{' '}
              vs <span className="text-scram-secondary font-semibold">Agentic 96%</span>
            </span>
          </div>

          <div>
            <button
              onClick={() => {
                tracker.trackCTA(content.ui.requestDiagnostic, 'comparison', 'whatsapp');
                const msg = encodeURIComponent(content.ui.whatsAppPricingMsg);
                window.open(`https://wa.me/522211065056?text=${msg}`, '_blank');
              }}
              className="w-full md:w-auto px-8 py-3.5 md:py-4 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-base md:text-lg rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,153,0,0.35)]"
            >
              {content.ui.requestDiagnostic}
            </button>
          </div>
          <p className="font-body text-xs md:text-sm text-white/60 mt-3 md:mt-4">
            {content.ui.closedBudget48h}
          </p>
        </div>
      </div>
    </section>
  );
}
