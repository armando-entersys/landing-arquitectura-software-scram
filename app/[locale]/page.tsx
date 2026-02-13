'use client';

import Image from 'next/image';
import { useContent } from '@/lib/i18n/ContentContext';
import { HeroVisual } from '@/components/sections/HeroVisual';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { Icon } from '@/components/ui/Icon';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Comparison } from '@/components/sections/Comparison';
import { Team } from '@/components/sections/Team';
import { TrackingProvider } from '@/components/providers/TrackingProvider';
import { useAIFunnel } from '@/lib/personalization/useAIFunnel';
import { tracker } from '@/lib/tracking/universal-tracker';
import { LocaleSwitcher } from '@/components/ui/LocaleSwitcher';

function HomePage() {
  const { content } = useContent();
  const { getCTAText } = useAIFunnel();

  return (
    <>
    <main className="min-h-screen">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center bg-gradient-to-br from-white via-scram-light to-scram-lightAlt overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-scram-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-scram-secondary/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 py-16 md:py-32 w-full">
          {/* Logo Header */}
          <div className="mb-8 md:mb-12">
            <div className="relative w-[120px] sm:w-[160px] md:w-[180px] h-[35px] sm:h-[45px] md:h-[50px]">
              <Image
                src="/logo.png"
                alt="Scram Consulting"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="mb-4 md:mb-6">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-scram-primary/10 text-scram-primary rounded-pill text-sm md:text-base font-semibold border border-scram-primary/20">
                  {content.hero.eyebrow}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold italic text-scram-dark mb-4 md:mb-6 leading-tight tracking-tight">
                {content.hero.title}
                <br />
                <span className="text-scram-primary">{content.hero.titleHighlight}</span>
                <br />
                {content.hero.titleContinued}
              </h1>

              <p className="font-body text-lg md:text-2xl text-scram-paragraph mb-6 md:mb-8 leading-relaxed">
                {content.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8">
                <button
                  onClick={() => {
                    tracker.trackCTA(getCTAText(content.hero.ctaPrimary), 'hero', '#contacto');
                    const msg = encodeURIComponent(content.ui.whatsAppHeroMsg);
                    window.open(`https://wa.me/522211065056?text=${msg}`, '_blank');
                  }}
                  className="px-6 py-3.5 md:px-8 md:py-4 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-base rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5"
                >
                  {getCTAText(content.hero.ctaPrimary)}
                </button>
                <button
                  onClick={() => {
                    tracker.trackCTA(content.hero.ctaSecondary, 'hero', '#casos-de-exito');
                    document.getElementById('casos-de-exito')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 md:px-8 md:py-4 bg-white hover:bg-scram-light text-scram-primary font-semibold text-base rounded-pill border-2 border-scram-primary transition-all duration-300 hover:-translate-y-0.5"
                >
                  {content.hero.ctaSecondary}
                </button>
              </div>

              <p className="font-body text-sm md:text-base text-scram-paragraph mb-6">
                {content.hero.helperText}
              </p>

              {/* Mini stats - horizontal on mobile */}
              <div className="flex gap-4 md:gap-6">
                {content.hero.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-scram-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm md:text-lg font-bold text-scram-primary">{stat.value}</span>
                    </div>
                    <span className="font-body text-xs md:text-sm text-scram-paragraph">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual - Hidden on mobile */}
            <div className="hidden md:block h-[500px] md:h-[600px]">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Social Proof */}
      <ClientLogos />

      {/* Problem Section - Visual Cards */}
      <section id="problema" className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark mb-3 md:mb-6">
              {content.problem.title}
            </h2>
            <p className="font-body text-base md:text-xl text-scram-paragraph">
              {content.problem.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {content.problem.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-5 md:p-8 rounded-card border border-scram-border hover:border-scram-error/50 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-2"
              >
                {/* Icon + Title row on mobile */}
                <div className="flex items-center gap-3 md:block mb-3 md:mb-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-scram-error/10 rounded-xl flex items-center justify-center md:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon name={challenge.icon} className="text-scram-error" size={24} />
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-scram-dark md:hidden">
                    {challenge.title}
                  </h3>
                </div>

                <h3 className="hidden md:block font-heading text-2xl font-semibold text-scram-dark mb-4">
                  {challenge.title}
                </h3>
                <p className="font-body text-sm md:text-base text-scram-paragraph mb-4 md:mb-6 leading-relaxed">
                  {challenge.description}
                </p>

                {/* Solution */}
                <div className="pt-4 md:pt-6 border-t border-scram-border">
                  <p className="flex items-start gap-2 text-scram-secondary font-medium text-sm md:text-base">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body">{challenge.solution}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies - Real Projects */}
      <CaseStudies />

      {/* How it Works - Timeline Visual */}
      <section id="metodologia" className="py-12 md:py-32 bg-scram-light">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark mb-3 md:mb-6">
              {content.howItWorks.title}
            </h2>
            <p className="font-body text-base md:text-xl text-scram-paragraph">
              {content.howItWorks.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - desktop only */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-scram-primary via-scram-secondary to-scram-purple" />

            {/* Mobile: 2x2 grid. Desktop: 4 cols */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
              {content.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Number circle */}
                  <div className="relative z-10 w-10 h-10 md:w-16 md:h-16 bg-scram-primary rounded-full flex items-center justify-center mb-3 md:mb-6 mx-auto shadow-button">
                    <span className="text-lg md:text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-white p-4 md:p-6 rounded-card shadow-card border border-scram-border/30 h-full">
                    <div className="text-center mb-2 md:mb-4">
                      <span className="px-2 py-0.5 md:px-3 md:py-1 bg-scram-secondary/10 text-scram-secondary rounded-pill text-xs font-semibold">
                        {step.time}
                      </span>
                    </div>
                    <h3 className="font-heading text-sm md:text-lg font-semibold text-scram-dark mb-1 md:mb-3 text-center leading-tight">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-scram-paragraph text-center leading-relaxed hidden md:block">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid - Icons + Metrics */}
      <section id="beneficios" className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark mb-3 md:mb-6">
              {content.benefits.title}
            </h2>
          </div>

          {/* Mobile: 2 cols compact. Desktop: 3 cols */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {content.benefits.items.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-scram-light p-4 md:p-8 rounded-card border border-scram-border hover:border-scram-primary/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-scram-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={benefit.icon} className="text-scram-primary" size={20} />
                  </div>
                  <span className="px-2 py-0.5 md:px-3 md:py-1 bg-scram-primary/10 text-scram-primary rounded-pill text-[10px] md:text-xs font-bold">
                    {benefit.metric}
                  </span>
                </div>
                <h3 className="font-heading text-base md:text-2xl font-semibold text-scram-dark mb-1 md:mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-scram-paragraph leading-relaxed hidden md:block">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison - Us vs Traditional */}
      <Comparison />

      {/* Testimonials - With Images */}
      <section id="casos-de-exito" className="py-12 md:py-32 bg-scram-dark">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-white mb-3 md:mb-6">
              {content.testimonials.title}
            </h2>
          </div>

          {/* Mobile: horizontal scroll. Desktop: grid */}
          <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
            {content.testimonials.items.map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-[280px] md:min-w-0 snap-center bg-white p-5 md:p-8 rounded-card shadow-card-hover hover:shadow-card transition-shadow duration-300 flex-shrink-0 md:flex-shrink"
              >
                {/* Quote */}
                <div className="mb-4 md:mb-6">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-scram-primary/30 mb-2 md:mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="font-body text-sm md:text-base text-scram-dark leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t border-scram-border">
                  {/* Photo */}
                  <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body font-bold text-sm md:text-base text-scram-dark">{testimonial.author}</p>
                    <p className="font-body text-xs md:text-sm text-scram-paragraph">{testimonial.role}</p>
                    <p className="font-body text-[10px] md:text-xs text-scram-paragraph">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Human Touch */}
      <Team />

      {/* Pricing - Value-focused (No prices shown) */}
      <section id="servicios" className="py-12 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-12">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark mb-3 md:mb-6">
              {content.pricing.title}
            </h2>
            <p className="font-body text-base md:text-xl text-scram-paragraph">
              {content.pricing.subtitle}
            </p>
          </div>

          {/* Factors Grid - 2 cols on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12">
            {content.pricing.factors.map((factor, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-scram-light to-white p-4 md:p-6 rounded-card border border-scram-border hover:border-scram-primary transition-all duration-300 shadow-card"
              >
                <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-scram-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={factor.icon} className="text-scram-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm md:text-xl font-semibold text-scram-dark mb-1 md:mb-2">
                      {factor.title}
                    </h3>
                    <p className="font-body text-xs md:text-sm text-scram-paragraph leading-relaxed hidden md:block">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Box */}
          <div className="bg-scram-secondary/10 border-2 border-scram-secondary rounded-card p-5 md:p-8 mb-6 md:mb-8">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-scram-dark mb-4 md:mb-6 text-center">
              {content.pricing.guarantee.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              {content.pricing.guarantee.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3">
                  <svg className="w-5 h-5 text-scram-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-sm md:text-base text-scram-dark font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="text-center bg-gradient-to-br from-white to-scram-light p-6 md:p-10 rounded-card border border-scram-border shadow-card">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-scram-dark mb-2 md:mb-3">
              {content.pricing.cta.title}
            </h3>
            <p className="font-body text-base md:text-lg text-scram-paragraph mb-4 md:mb-6">
              {content.pricing.cta.subtitle}
            </p>
            <button
              onClick={() => {
                tracker.trackCTA(content.pricing.cta.buttonText, 'pricing', 'whatsapp');
                const msg = encodeURIComponent(content.ui.whatsAppPricingMsg);
                window.open(`https://wa.me/522211065056?text=${msg}`, '_blank');
              }}
              className="w-full md:w-auto px-8 py-3.5 md:py-4 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-base md:text-lg rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:shadow-button-green"
            >
              {content.pricing.cta.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion */}
      <section id="faq" className="py-12 md:py-32 bg-scram-light">
        <div className="max-w-4xl mx-auto px-5 md:px-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark text-center mb-8 md:mb-16">
            {content.faq.title}
          </h2>

          <div className="space-y-3 md:space-y-4">
            {content.faq.items.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white p-4 md:p-6 rounded-card border border-scram-border hover:border-scram-primary/50 transition-all duration-300 shadow-card"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-3 md:gap-4">
                  <h3 className="font-heading text-base md:text-xl font-semibold text-scram-dark group-open:text-scram-primary">
                    {item.question}
                  </h3>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-scram-paragraph flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-scram-border">
                  <p className="font-body text-sm md:text-base text-scram-paragraph leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Strong */}
      <section id="contacto" className="py-16 md:py-32 bg-gradient-to-br from-scram-primary via-scram-primary to-scram-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-12 text-center">
          <h2 className="font-heading text-3xl md:text-6xl font-bold italic text-white mb-4 md:mb-6">
            {content.cta.title}
          </h2>
          <p className="font-body text-lg md:text-2xl text-white/90 mb-8 md:mb-12">
            {content.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 md:mb-6">
            <button
              onClick={() => {
                tracker.trackCTA(content.cta.button, 'final-cta', 'whatsapp');
                const msg = encodeURIComponent(content.ui.whatsAppCtaMsg);
                window.open(`https://wa.me/522211065056?text=${msg}`, '_blank');
              }}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 bg-white text-scram-primary hover:bg-white/90 font-semibold text-base rounded-pill shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              {content.cta.button}
            </button>
          </div>

          <p className="font-body text-xs md:text-sm text-white/80">
            {content.cta.helperText}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 bg-scram-dark border-t border-scram-border">
        <div className="max-w-7xl mx-auto px-5 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Logo */}
            <div className="relative w-[120px] md:w-[150px] h-[40px] md:h-[50px]">
              <Image
                src="/logo.png"
                alt="Scram Consulting"
                fill
                style={{ objectFit: 'contain' }}
                className="brightness-0 invert"
              />
            </div>

            {/* Locale Switcher */}
            <LocaleSwitcher />

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="font-body text-xs md:text-sm text-white/80 mb-1">
                {content.ui.copyright}
              </p>
              <p className="font-body text-xs text-white/60">
                {content.ui.tagline}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
    <FloatingWhatsApp />
    </>
  );
}

export default function HomePageWithProviders() {
  return (
    <TrackingProvider>
      <HomePage />
    </TrackingProvider>
  );
}
