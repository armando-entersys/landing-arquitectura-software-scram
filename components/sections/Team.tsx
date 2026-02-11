'use client';

import { content } from '@/content/copy';

export function Team() {
  return (
    <section className="py-12 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-5 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold italic text-scram-dark mb-3 md:mb-6">
            {content.team.title}
          </h2>
          <p className="font-body text-base md:text-xl text-scram-paragraph max-w-3xl mx-auto mb-4 md:mb-8">
            {content.team.subtitle}
          </p>
          <p className="font-body text-sm md:text-lg text-scram-paragraph max-w-2xl mx-auto hidden md:block">
            {content.team.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-16">
          {content.team.stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 md:p-6 bg-gradient-to-br from-scram-light to-white rounded-card border border-scram-border"
            >
              <div className="font-heading text-3xl md:text-5xl font-bold text-scram-primary mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className="font-body text-xs md:text-base text-scram-paragraph">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Person */}
        <div className="bg-gradient-to-br from-scram-primary/5 to-scram-secondary/5 rounded-card p-6 md:p-8 lg:p-12 border border-scram-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden bg-gradient-to-br from-scram-primary to-scram-secondary p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-4xl md:text-6xl text-white font-bold">
                    {content.team.contact.name[5]}
                  </span>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-xl md:text-3xl font-bold text-scram-dark mb-1 md:mb-2">
                {content.team.contact.name}
              </h3>
              <p className="font-body text-base md:text-lg text-scram-primary font-semibold mb-2 md:mb-3">
                {content.team.contact.role}
              </p>
              <p className="font-body text-sm md:text-base text-scram-paragraph leading-relaxed mb-4 md:mb-6">
                {content.team.contact.description}
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center md:justify-start">
                <button className="px-5 py-2.5 md:px-6 md:py-3 bg-scram-primary hover:bg-scram-primaryHover text-white font-semibold text-sm md:text-base rounded-pill transition-all duration-300 hover:-translate-y-0.5 shadow-button">
                  Agendar llamada
                </button>
                <button className="px-5 py-2.5 md:px-6 md:py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-sm md:text-base rounded-pill transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp directo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
