'use client';

import { useContent } from '@/lib/i18n/ContentContext';

export const HeroVisual = () => {
  const { content } = useContent();

  return (
    <div className="relative w-full h-full">
      {/* Placeholder para video o imagen hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-scram-primary/10 via-scram-secondary/10 to-scram-purple/10 rounded-card overflow-hidden">
        {/* Grid pattern sutil */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,153,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,153,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Elementos flotantes decorativos */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-scram-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-scram-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-scram-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Placeholder de imagen/video */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-12 bg-white/80 backdrop-blur-sm rounded-card border border-scram-border shadow-card">
            <svg className="w-24 h-24 mx-auto mb-4 text-scram-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-body text-sm text-scram-paragraph">{content.ui.videoDemoHere}</p>
            <p className="font-body text-xs text-scram-paragraph/60 mt-2">{content.ui.softwareRunning}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
