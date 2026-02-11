'use client';

import { useEffect, useRef } from 'react';

export const CentauroDiagram = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Animación sutil al entrar en viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 400"
      className="w-full max-w-4xl mx-auto opacity-0 transition-opacity duration-1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Fondo gradient sutil */}
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE5CC" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D4F5E0" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>

        <linearGradient id="humanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9900" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      <rect width="800" height="400" fill="url(#bgGradient)" rx="16" />

      {/* IA - Lado Izquierdo */}
      <g transform="translate(100, 150)">
        <circle cx="0" cy="0" r="60" fill="url(#aiGradient)" opacity="0.2" />
        <circle cx="0" cy="0" r="45" fill="url(#aiGradient)" />

        {/* Icono IA */}
        <g transform="translate(-20, -20)">
          <path
            d="M20 4L12 8L4 4L12 0L20 4Z M20 12L12 16L4 12 M20 20L12 24L4 20"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        <text
          y="85"
          textAnchor="middle"
          className="fill-surface-onSurface font-medium text-sm"
        >
          IA Copiloto
        </text>
        <text
          y="105"
          textAnchor="middle"
          className="fill-surface-onVariant text-xs"
        >
          Velocidad + Automatización
        </text>
      </g>

      {/* Humano - Lado Derecho */}
      <g transform="translate(700, 150)">
        <circle cx="0" cy="0" r="60" fill="url(#humanGradient)" opacity="0.2" />
        <circle cx="0" cy="0" r="45" fill="url(#humanGradient)" />

        {/* Icono Humano */}
        <g transform="translate(-15, -20)">
          <circle cx="15" cy="8" r="6" fill="white" />
          <path
            d="M15 16 C10 16, 8 20, 8 26 L22 26 C22 20, 20 16, 15 16 Z"
            fill="white"
          />
        </g>

        <text
          y="85"
          textAnchor="middle"
          className="fill-surface-onSurface font-medium text-sm"
        >
          Ingeniero Senior
        </text>
        <text
          y="105"
          textAnchor="middle"
          className="fill-surface-onVariant text-xs"
        >
          Criterio + Arquitectura
        </text>
      </g>

      {/* Conexión Central - Sinergia */}
      <g transform="translate(400, 200)">
        {/* Líneas de conexión con animación */}
        <line
          x1="-245"
          y1="-50"
          x2="-50"
          y2="0"
          stroke="#6366F1"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="10"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>

        <line
          x1="245"
          y1="-50"
          x2="50"
          y2="0"
          stroke="#FF9900"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="10"
            to="0"
            dur="2s"
            repeatCount="indefinite"
          />
        </line>

        {/* Hexágono central - Resultado */}
        <polygon
          points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20"
          fill="#44CE6F"
          opacity="0.9"
        />

        <text
          y="5"
          textAnchor="middle"
          className="fill-white font-bold text-base"
        >
          Centauro
        </text>

        <text
          y="65"
          textAnchor="middle"
          className="fill-surface-onSurface font-medium text-sm"
        >
          Software de Clase Mundial
        </text>
        <text
          y="85"
          textAnchor="middle"
          className="fill-surface-onVariant text-xs"
        >
          3x más rápido · 40% menos costo
        </text>
      </g>

      {/* Etiquetas de beneficios */}
      <g transform="translate(100, 320)">
        <rect x="-50" y="-15" width="100" height="30" rx="15" fill="#EDE9FE" />
        <text
          textAnchor="middle"
          y="5"
          className="fill-tertiary-onContainer text-xs font-medium"
        >
          Tests automáticos
        </text>
      </g>

      <g transform="translate(400, 350)">
        <rect x="-60" y="-15" width="120" height="30" rx="15" fill="#D4F5E0" />
        <text
          textAnchor="middle"
          y="5"
          className="fill-secondary-onContainer text-xs font-medium"
        >
          Arquitectura robusta
        </text>
      </g>

      <g transform="translate(700, 320)">
        <rect x="-55" y="-15" width="110" height="30" rx="15" fill="#FFE5CC" />
        <text
          textAnchor="middle"
          y="5"
          className="fill-primary-onContainer text-xs font-medium"
        >
          Código auditado
        </text>
      </g>
    </svg>
  );
};
