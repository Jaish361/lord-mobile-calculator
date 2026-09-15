/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0D17',
          primary: '#0F1527',
          secondary: '#060810',
          tertiary: '#1B233C',
          card: '#11172B',
          cart: '#141A30',
          button: '#D97706',
          'button-hover': '#F59E0B',
          'button-selector': '#1E2845',
          gold: '#B45309',
        },
        heroism: {
          dark: '#070911',
          darker: '#040509',
          card: '#0F1527',
          cardBorder: 'rgba(245, 158, 11, 0.2)',
          cardBorderHover: 'rgba(245, 158, 11, 0.5)',
          gold: {
            DEFAULT: '#F59E0B',
            light: '#FDE68A',
            dark: '#B45309',
            glow: 'rgba(245, 158, 11, 0.3)',
          },
          cyan: {
            DEFAULT: '#06B6D4',
            light: '#67E8F9',
            dark: '#0E7490',
            glow: 'rgba(6, 182, 212, 0.3)',
          },
          blue: {
            DEFAULT: '#3B82F6',
            light: '#93C5FD',
            dark: '#1D4ED8',
          },
        },
        text: {
          logo: '#F59E0B',
          primary: '#E2E8F0',
          secondary: '#FFFFFF',
          tertiary: '#F8FAFC',
          navbar: '#FBBF24',
          gold: '#FBBF24',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        headline: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        gothic: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -4px rgba(245, 158, 11, 0.35)',
        'glow-cyan': '0 0 25px -4px rgba(6, 182, 212, 0.35)',
        'glow-royal': '0 0 30px -5px rgba(124, 58, 237, 0.3)',
        'card': '0 12px 35px -10px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #D97706 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #A5F3FC 0%, #06B6D4 50%, #0891B2 100%)',
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(245, 158, 11, 0.15), transparent 70%)',
      }
    },
  },
  plugins: [],
}
