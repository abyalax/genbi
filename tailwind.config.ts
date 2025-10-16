import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const pluginRounded = plugin(({ addUtilities }) => {
  console.log('✅ Rounded plugin loaded');
  const newUtilities = {
    '.rounded-custom': {
      'border-top-left-radius': '90rem',
      'border-top-right-radius': '60rem',
      'border-bottom-right-radius': '20rem',
      'border-bottom-left-radius': '28rem',
    },
  };
  addUtilities(newUtilities);
});

const config: Config = {
  plugins: [pluginRounded],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slide-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-to-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-to-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-from-left': 'slide-from-left 0.3s ease-out',
        'slide-to-left': 'slide-to-left 0.3s ease-out',
        'slide-from-right': 'slide-from-right 0.3s ease-out',
        'slide-to-right': 'slide-to-right 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
      },
    },
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};
export default config;
