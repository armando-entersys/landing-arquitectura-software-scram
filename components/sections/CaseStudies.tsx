'use client';

import { content } from '@/content/copy';

export function CaseStudies() {
  return (
    <section className="py-12 md:py-32 bg-gradient-to-br from-scram-light via-white to-scram-lightAlt">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark mb-3 md:mb-6">
            {content.caseStudies.title}
          </h2>
          <p className="font-body text-base md:text-xl text-scram-paragraph">
            {content.caseStudies.subtitle}
          </p>
        </div>

        {/* Mobile: horizontal scroll cards. Desktop: stacked full cards */}
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5">
          {content.caseStudies.cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="min-w-[300px] snap-center bg-white rounded-card shadow-card border border-scram-border p-5 flex-shrink-0"
            >
              <span className="inline-block px-2 py-0.5 bg-scram-primary/10 text-scram-primary rounded-pill text-xs font-semibold mb-2">
                {caseStudy.industry}
              </span>
              <h3 className="font-heading text-xl font-bold text-scram-dark mb-2">
                {caseStudy.title}
              </h3>
              <p className="font-body text-sm text-scram-paragraph mb-4">
                {caseStudy.solution}
              </p>

              {/* Results - compact */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-scram-secondary/5 rounded-lg border border-scram-secondary/20 mb-3">
                {caseStudy.results.map((result, ridx) => (
                  <div key={ridx} className="text-center">
                    <div className="font-heading text-xl font-bold text-scram-secondary">
                      {result.metric}
                    </div>
                    <div className="font-body text-[10px] text-scram-paragraph leading-tight">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="border-l-3 border-scram-primary pl-3">
                <p className="font-body text-xs text-scram-dark italic">
                  &ldquo;{caseStudy.testimonial}&rdquo;
                </p>
              </blockquote>
            </div>
          ))}
        </div>

        {/* Desktop: full layout */}
        <div className="hidden md:block space-y-16">
          {content.caseStudies.cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center bg-white rounded-card shadow-card-hover p-8 lg:p-12 border border-scram-border hover:border-scram-primary transition-all duration-300`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video rounded-card overflow-hidden bg-gradient-to-br from-scram-primary/20 to-scram-secondary/20">
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-white/30">
                    <div className="text-center p-8">
                      <svg className="w-20 h-20 mx-auto mb-4 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      <p className="font-body text-sm text-scram-paragraph">
                        Screenshot del sistema real
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-scram-primary/10 text-scram-primary rounded-pill text-sm font-semibold">
                    {caseStudy.industry}
                  </span>
                </div>

                <h3 className="font-heading text-3xl font-bold text-scram-dark mb-3">
                  {caseStudy.title}
                </h3>

                <p className="font-body text-base text-scram-paragraph mb-4">
                  <span className="font-semibold text-scram-dark">El reto:</span> {caseStudy.challenge}
                </p>

                <p className="font-body text-base text-scram-paragraph mb-6">
                  <span className="font-semibold text-scram-dark">La solución:</span> {caseStudy.solution}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-6 bg-scram-secondary/5 rounded-card border border-scram-secondary/20">
                  {caseStudy.results.map((result, ridx) => (
                    <div key={ridx} className="text-center">
                      <div className="font-heading text-2xl md:text-3xl font-bold text-scram-secondary mb-1">
                        {result.metric}
                      </div>
                      <div className="font-body text-xs md:text-sm text-scram-paragraph">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-scram-primary pl-4 italic">
                  <p className="font-body text-base text-scram-dark">
                    &ldquo;{caseStudy.testimonial}&rdquo;
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
