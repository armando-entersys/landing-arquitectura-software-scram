'use client';

import Image from 'next/image';
import { content } from '@/content/copy';
import { HeroVisual } from '@/components/sections/HeroVisual';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { Icon } from '@/components/ui/Icon';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Comparison } from '@/components/sections/Comparison';
import { Team } from '@/components/sections/Team';

export default function HomePage() {
  return (
    <>
    <main className="min-h-screen">
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-scram-light to-scram-lightAlt overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-scram-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-scram-secondary/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32 w-full">
          {/* Logo Header */}
          <div className="mb-12">
            <div className="relative w-[140px] sm:w-[160px] md:w-[180px] h-[40px] sm:h-[45px] md:h-[50px]">
              <Image
                src="/logo.png"
                alt="Scram Consulting"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="mb-6">
                <span className="px-4 py-2 bg-scram-primary/10 text-scram-primary rounded-pill text-base font-semibold border border-scram-primary/20">
                  {content.hero.eyebrow}
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold italic text-scram-dark mb-6 leading-tight tracking-tight">
                {content.hero.title}
                <br />
                <span className="text-scram-primary">{content.hero.titleHighlight}</span>
                <br />
                {content.hero.titleContinued}
              </h1>

              <p className="font-body text-xl md:text-2xl text-scram-paragraph mb-8 leading-relaxed">
                {content.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-8 py-4 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-base rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5">
                  {content.hero.ctaPrimary}
                </button>
                <button className="px-8 py-4 bg-white hover:bg-scram-light text-scram-primary font-semibold text-base rounded-pill border-2 border-scram-primary transition-all duration-300 hover:-translate-y-0.5">
                  {content.hero.ctaSecondary}
                </button>
              </div>

              <p className="font-body text-base text-scram-paragraph mb-8">
                {content.hero.helperText}
              </p>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-6">
                {content.hero.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-scram-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-scram-primary">{stat.value}</span>
                    </div>
                    <span className="font-body text-sm text-scram-paragraph">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="h-[500px] md:h-[600px]">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Social Proof */}
      <ClientLogos />

      {/* Problem Section - Visual Cards */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold italic text-scram-dark mb-6">
              {content.problem.title}
            </h2>
            <p className="font-body text-xl text-scram-paragraph">
              {content.problem.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.problem.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-card border border-scram-border hover:border-scram-error/50 transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-scram-error/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={challenge.icon} className="text-scram-error" size={32} />
                </div>

                {/* Problem */}
                <h3 className="font-heading text-2xl font-semibold text-scram-dark mb-4">
                  {challenge.title}
                </h3>
                <p className="font-body text-base text-scram-paragraph mb-6 leading-relaxed">
                  {challenge.description}
                </p>

                {/* Solution */}
                <div className="pt-6 border-t border-scram-border">
                  <p className="flex items-start gap-2 text-scram-secondary font-medium">
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
      <section className="py-20 md:py-32 bg-scram-light">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold italic text-scram-dark mb-6">
              {content.howItWorks.title}
            </h2>
            <p className="font-body text-xl text-scram-paragraph">
              {content.howItWorks.subtitle}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-scram-primary via-scram-secondary to-scram-purple" />

            <div className="grid md:grid-cols-4 gap-8">
              {content.howItWorks.steps.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 bg-scram-primary rounded-full flex items-center justify-center mb-6 mx-auto shadow-button">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-white p-6 rounded-card shadow-card border border-scram-border/30">
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-scram-secondary/10 text-scram-secondary rounded-pill text-xs font-semibold">
                        {step.time}
                      </span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-scram-dark mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-scram-paragraph text-center leading-relaxed">
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
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold italic text-scram-dark mb-6">
              {content.benefits.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.benefits.items.map((benefit, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-scram-light p-8 rounded-card border border-scram-border hover:border-scram-primary/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-scram-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon name={benefit.icon} className="text-scram-primary" size={28} />
                  </div>
                  <span className="px-3 py-1 bg-scram-primary/10 text-scram-primary rounded-pill text-xs font-bold">
                    {benefit.metric}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-scram-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-scram-paragraph leading-relaxed">
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
      <section className="py-20 md:py-32 bg-scram-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold italic text-white mb-6">
              {content.testimonials.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-card shadow-card-hover hover:shadow-card transition-shadow duration-300"
              >
                {/* Quote */}
                <div className="mb-6">
                  <svg className="w-10 h-10 text-scram-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                  <p className="font-body text-base text-scram-dark leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-scram-border">
                  {/* Photo */}
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body font-bold text-scram-dark">{testimonial.author}</p>
                    <p className="font-body text-sm text-scram-paragraph">{testimonial.role}</p>
                    <p className="font-body text-xs text-scram-paragraph">{testimonial.company}</p>
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
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold italic text-scram-dark mb-6">
              {content.pricing.title}
            </h2>
            <p className="font-body text-xl text-scram-paragraph">
              {content.pricing.subtitle}
            </p>
          </div>

          {/* Factors Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {content.pricing.factors.map((factor, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-scram-light to-white p-6 rounded-card border border-scram-border hover:border-scram-primary transition-all duration-300 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-scram-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={factor.icon} className="text-scram-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-scram-dark mb-2">
                      {factor.title}
                    </h3>
                    <p className="font-body text-sm text-scram-paragraph leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Box */}
          <div className="bg-scram-secondary/10 border-2 border-scram-secondary rounded-card p-8 mb-8">
            <h3 className="font-heading text-2xl font-bold text-scram-dark mb-6 text-center">
              {content.pricing.guarantee.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {content.pricing.guarantee.points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-scram-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-body text-base text-scram-dark font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="text-center bg-gradient-to-br from-white to-scram-light p-10 rounded-card border border-scram-border shadow-card">
            <h3 className="font-heading text-3xl font-bold text-scram-dark mb-3">
              {content.pricing.cta.title}
            </h3>
            <p className="font-body text-lg text-scram-paragraph mb-6">
              {content.pricing.cta.subtitle}
            </p>
            <button className="px-10 py-4 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-lg rounded-pill shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:shadow-button-green">
              {content.pricing.cta.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* FAQ - Accordion */}
      <section className="py-20 md:py-32 bg-scram-light">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold italic text-scram-dark text-center mb-16">
            {content.faq.title}
          </h2>

          <div className="space-y-4">
            {content.faq.items.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white p-6 rounded-card border border-scram-border hover:border-scram-primary/50 transition-all duration-300 shadow-card"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold text-scram-dark group-open:text-scram-primary">
                    {item.question}
                  </h3>
                  <svg
                    className="w-6 h-6 text-scram-paragraph flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t border-scram-border">
                  <p className="font-body text-base text-scram-paragraph leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Strong */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-scram-primary via-scram-primary to-scram-secondary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold italic text-white mb-6">
            {content.cta.title}
          </h2>
          <p className="font-body text-xl md:text-2xl text-white/90 mb-12">
            {content.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-8 py-4 bg-white text-scram-primary hover:bg-white/90 font-semibold text-base rounded-pill shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              {content.cta.button}
            </button>
          </div>

          <p className="font-body text-sm text-white/80">
            {content.cta.helperText}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-scram-dark border-t border-scram-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="relative w-[150px] h-[50px]">
              <Image
                src="/logo.png"
                alt="Scram Consulting"
                fill
                style={{ objectFit: 'contain' }}
                className="brightness-0 invert"
              />
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="font-body text-sm text-white/80 mb-1">
                © 2026 Scram Consulting. Todos los derechos reservados.
              </p>
              <p className="font-body text-xs text-white/60">
                Software empresarial que funciona
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
