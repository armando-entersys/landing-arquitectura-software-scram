import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // SCRAM Brand Colors
        scram: {
          // Colores primarios
          primary: '#ff9900',
          primaryHover: '#ff8c00',
          secondary: '#44ce6f',
          secondaryDark: '#007a3d',
          dark: '#1a1a1a',
          purple: '#c679e3',

          // Colores neutrales
          white: '#ffffff',
          light: '#f7fafd',
          lightAlt: '#f9f6f6',
          navlink: '#4a6f8a',
          paragraph: '#6084a4',
          border: '#e0e0e0',

          // Colores semánticos
          success: '#00A859',
          warning: '#ff9900',
          error: '#eb6b3d',
          info: '#4a6f8a',
        },
        // Aliases para compatibilidad con código existente
        primary: {
          DEFAULT: '#ff9900',
          onPrimary: '#ffffff',
        },
        secondary: {
          DEFAULT: '#44ce6f',
          onSecondary: '#ffffff',
        },
        tertiary: {
          DEFAULT: '#c679e3',
          onTertiary: '#ffffff',
        },
        error: {
          DEFAULT: '#eb6b3d',
          onError: '#ffffff',
        },
        // Surface & Background (adaptado a Scram)
        surface: {
          DEFAULT: '#ffffff',
          container: {
            lowest: '#ffffff',
            low: '#f7fafd',
            DEFAULT: '#f9f6f6',
          },
          onSurface: '#1a1a1a',
          onVariant: '#6084a4',
        },
        // Outline
        outline: {
          DEFAULT: '#4a6f8a',
          variant: '#e0e0e0',
        },
      },
      boxShadow: {
        // SCRAM Shadows
        'card': '0 5px 15px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 12px rgba(255, 153, 0, 0.25)',
        'button-green': '0 13px 27px 0 rgba(68, 206, 111, 0.25)',
        // Mantener MD3 para compatibilidad
        'md3-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        'md3-2': '0 5px 15px rgba(0, 0, 0, 0.08)',
        'md3-3': '0 10px 25px rgba(0, 0, 0, 0.12)',
        'md3-4': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)',
        'md3-5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)',
      },
      fontFamily: {
        // SCRAM Fonts
        sans: ['var(--font-cabin)', 'Cabin', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['var(--font-asap)', 'ASAP', 'sans-serif'],
        body: ['var(--font-cabin)', 'Cabin', 'sans-serif'],
        // Mantener display para compatibilidad
        display: ['var(--font-asap)', 'ASAP', 'sans-serif'],
      },
      fontSize: {
        'display-large': ['57px', { lineHeight: '64px', letterSpacing: '-0.25px', fontWeight: '400' }],
        'display-medium': ['45px', { lineHeight: '52px', letterSpacing: '0px', fontWeight: '400' }],
        'display-small': ['36px', { lineHeight: '44px', letterSpacing: '0px', fontWeight: '400' }],
        'headline-large': ['32px', { lineHeight: '40px', letterSpacing: '0px', fontWeight: '400' }],
        'headline-medium': ['28px', { lineHeight: '36px', letterSpacing: '0px', fontWeight: '400' }],
        'headline-small': ['24px', { lineHeight: '32px', letterSpacing: '0px', fontWeight: '400' }],
        'title-large': ['22px', { lineHeight: '28px', letterSpacing: '0px', fontWeight: '500' }],
        'title-medium': ['16px', { lineHeight: '24px', letterSpacing: '0.15px', fontWeight: '500' }],
        'title-small': ['14px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '500' }],
        'body-large': ['16px', { lineHeight: '24px', letterSpacing: '0.5px', fontWeight: '400' }],
        'body-medium': ['14px', { lineHeight: '20px', letterSpacing: '0.25px', fontWeight: '400' }],
        'body-small': ['12px', { lineHeight: '16px', letterSpacing: '0.4px', fontWeight: '400' }],
        'label-large': ['14px', { lineHeight: '20px', letterSpacing: '0.1px', fontWeight: '500' }],
        'label-medium': ['12px', { lineHeight: '16px', letterSpacing: '0.5px', fontWeight: '500' }],
        'label-small': ['11px', { lineHeight: '16px', letterSpacing: '0.5px', fontWeight: '500' }],
      },
      borderRadius: {
        // SCRAM Border Radius
        'pill': '100px',
        'card': '16px',
        // Mantener MD3 para compatibilidad
        'md3-none': '0px',
        'md3-xs': '4px',
        'md3-sm': '8px',
        'md3-md': '12px',
        'md3-lg': '16px',
        'md3-xl': '28px',
        'md3-full': '9999px',
      },
      spacing: {
        'md3-1': '4px',
        'md3-2': '8px',
        'md3-3': '12px',
        'md3-4': '16px',
        'md3-5': '20px',
        'md3-6': '24px',
        'md3-8': '32px',
        'md3-10': '40px',
        'md3-12': '48px',
        'md3-16': '64px',
        'md3-20': '80px',
        'md3-24': '96px',
      },
      transitionDuration: {
        'md3-short1': '50ms',
        'md3-short2': '100ms',
        'md3-short3': '150ms',
        'md3-short4': '200ms',
        'md3-medium1': '250ms',
        'md3-medium2': '300ms',
        'md3-medium3': '350ms',
        'md3-medium4': '400ms',
        'md3-long1': '450ms',
        'md3-long2': '500ms',
        'md3-long3': '550ms',
        'md3-long4': '600ms',
      },
      transitionTimingFunction: {
        'md3-emphasized': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        'md3-standard': 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        'md3-decelerate': 'cubic-bezier(0.0, 0.0, 0, 1)',
        'md3-accelerate': 'cubic-bezier(0.3, 0.0, 1, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in',
        slideUp: 'slideUp 0.8s ease-out',
        slideDown: 'slideDown 0.5s ease-out',
        scaleIn: 'scaleIn 0.4s ease-out',
        shimmer: 'shimmer 2s infinite linear',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
