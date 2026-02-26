'use client';

import Image from 'next/image';
import { useContent } from '@/lib/i18n/ContentContext';
import { PhoneSlideshow } from '@/components/ui/PhoneSlideshow';

const isTecCase = (image: string) => image.includes('/cases/tec/');

const blurDataUrls: Record<string, string> = {
  '/images/cases/aquafarms-erp.webp':
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAA5ElEQVR4nAHZACb/AGhwe2lxfEZKT0lMUklPVEpQV0lPVkZLU1hfaoiSngBlbHdianVzhYijv8ifv8mewcyew82ZvLlfZnN9iJkAZWp2X2Rwoayk6Pbm6ffn6ffn6ffnyNXMW2NufYibAGJqdVxhbaeys+r38Pz7/Pz7/OXn69zR0FJaY3R/kACxr7uWl59ISktSUVRQUFJPT1FOUFFMTlBxcXqnqbYA4d7kh4eHW1tbWFhYWFhYVVVVTk5OQkJCampq0s7WAO7r7tLR1NLR1NDQ0tDQ0s/P0czLzsjIysXEx9rX3V7ueXJAGQ8WAAAAAElFTkSuQmCC',
  '/images/cases/scram-logistics.webp':
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAIAAAC+zks0AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAA5ElEQVR4nAHZACb/ALOkkqucimRbTHd4cXR2bnJ1bXJtZYaFgb29vdbY2QCtpZNyal+PlpiJlp2DkJeCkJl1iop3iYyfpqjV19YApJmLa2Zcvbm2x8zLytHRzdLStcevvsS5kZiatriqALqrm5yThru3tMLKx87V1c3U1MDItay1p4CGgqytlgCvn46gmYyQjoyWl5SZmZeXmZmLiICAinmIg3e9uqIA3dbIxMG5jYyIhoWBhIJ+goB8iYeDkI6Kvr253drQANfQwK+qnrGsorCroa+qoLGsoq6on6+qoK+qnrq2ql/lg8Oi8KMPAAAAAElFTkSuQmCC',
};

export function CaseStudies() {
  const { content } = useContent();

  return (
    <section id="resultados" className="py-12 md:py-32 bg-gradient-to-br from-scram-light via-white to-scram-lightAlt">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark mb-3 md:mb-6">
            {content.caseStudies.title}
          </h2>
          <p className="font-body text-base md:text-xl text-scram-paragraph">
            {content.caseStudies.subtitle}
          </p>
        </div>

        {/* Mobile: vertically stacked full-width cards. Desktop: stacked full cards */}
        <div className="flex flex-col md:hidden gap-6">
          {content.caseStudies.cases.map((caseStudy, idx) => (
            <div
              key={idx}
              className="w-full bg-white rounded-card shadow-card border-l-4 border-scram-primary p-5"
            >
              {/* Case image */}
              {isTecCase(caseStudy.image) ? (
                <div className="mb-4 flex justify-center">
                  <div className="w-48">
                    <PhoneSlideshow />
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 shadow-md bg-scram-light">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataUrls[caseStudy.image]}
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              )}

              <span className="inline-block px-2 py-0.5 bg-scram-primary/10 text-scram-primary rounded-pill text-xs font-semibold mb-1">
                {caseStudy.industry}
              </span>
              <p className="font-body text-sm font-semibold text-scram-paragraph mb-2">
                {caseStudy.company}
              </p>
              <h3 className="font-heading text-xl font-bold text-scram-dark mb-2">
                {caseStudy.title}
              </h3>
              <p className="font-body text-sm text-scram-paragraph mb-4">
                {caseStudy.solution}
              </p>

              {/* Results */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-scram-secondary/5 rounded-lg border border-scram-secondary/20 mb-4">
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
                <p className="font-body text-sm text-scram-dark italic leading-relaxed">
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
              {/* Image / Phone slideshow */}
              <div className="w-full lg:w-1/2">
                {isTecCase(caseStudy.image) ? (
                  <PhoneSlideshow />
                ) : (
                  <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-lg bg-scram-light">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={blurDataUrls[caseStudy.image]}
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                )}
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
                  <span className="font-semibold text-scram-dark">{content.ui.theChallenge}</span> {caseStudy.challenge}
                </p>

                <p className="font-body text-base text-scram-paragraph mb-6">
                  <span className="font-semibold text-scram-dark">{content.ui.theSolution}</span> {caseStudy.solution}
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
