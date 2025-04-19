/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans, "")', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: {
          DEFAULT: '#D3114C',
          50: '#FCE4EC',
          100: '#F6CFDB',
          200: '#E57094',
          300: '#F06292',
          400: '#EC407A',
          500: '#D3114C',
          600: '#D81B60',
          700: '#C2185B',
          800: '#4A061B',
          900: '#2A030F',
          950: '#120005',
        },
        secondary: {
          DEFAULT: '#1F1F1F',
          50: '#2C2C2C',
          100: '#272727',
          200: '#232323',
          300: '#1F1F1F',
          400: '#1A1A1A',
          500: '#141414',
          600: '#0F0F0F',
          700: '#0A0A0A',
          800: '#050505',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#FF4081',
        },
        background: {
          DEFAULT: '#120005',
          paper: '#1E1E1E',
        },
        divider: {
          light: colors.slate[200],
          dark: colors.slate[800],
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
