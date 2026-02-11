'use client';

import { useEffect, useRef } from 'react';

interface Step {
  id: number;
  title: string;
  description: string;
  deliverable?: string;
}

interface ProcessTimelineProps {
  steps: Step[];
  title?: string;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps, title }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-slideUp');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={timelineRef} className="max-w-4xl mx-auto">
      {title && (
        <h3 className="text-headline-small text-surface-onSurface text-center mb-md3-12">
          {title}
        </h3>
      )}

      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-outline-variant" />

        {/* Steps */}
        <div className="space-y-md3-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="timeline-item opacity-0 relative pl-20"
            >
              {/* Número del paso */}
              <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-md3-2">
                <span className="text-title-large font-bold text-primary-onPrimary">
                  {step.id}
                </span>
              </div>

              {/* Contenido */}
              <div className="bg-surface-container p-md3-6 rounded-md3-lg shadow-md3-1 hover:shadow-md3-2 transition-shadow">
                <h4 className="text-title-large text-surface-onSurface mb-md3-2">
                  {step.title}
                </h4>
                <p className="text-body-medium text-surface-onVariant mb-md3-3">
                  {step.description}
                </p>

                {step.deliverable && (
                  <div className="flex items-center gap-md3-2 mt-md3-4 pt-md3-4 border-t border-outline-variant">
                    <svg
                      className="w-5 h-5 text-secondary flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-label-large text-secondary-onContainer">
                      Entregable: {step.deliverable}
                    </span>
                  </div>
                )}
              </div>

              {/* Conector al siguiente */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 -bottom-4 transform -translate-x-1/2">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path
                      d="M12 0L12 16M12 16L8 12M12 16L16 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-outline-variant"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
