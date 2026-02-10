/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1877f2', // Facebook blue
          50: '#e8f2fe',
          100: '#d1e5fd',
          200: '#a3cbfb',
          300: '#75b1f9',
          400: '#4797f7',
          500: '#1877f2',
          600: '#1464cc',
          700: '#0f4d99',
          800: '#0a3666',
          900: '#051f33',
          950: '#020c14',
        },
        secondary: {
          DEFAULT: '#42b72a', // Green
          50: '#f0fbed',
          100: '#e1f7db',
          200: '#c3efb7',
          300: '#a5e793',
          400: '#87df6f',
          500: '#42b72a',
          600: '#359622',
          700: '#287119',
          800: '#1a4b11',
          900: '#0d2608',
          950: '#051003',
        },
        // Premium Dark Theme Colors
        black: '#000000',
        surface: {
          50: '#121212',
          100: '#1a1a1a',
          200: '#262626',
          300: '#333333', // Card bg
          400: '#404040',
          500: '#525252',
          600: '#737373', // Subtext
          700: '#a3a3a3',
          800: '#d4d4d4',
          900: '#f5f5f5', // Almost white
        },
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'], // Headings
        'roboto': ['Roboto', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'], // Hero titles
        'bangers': ['Bangers', 'cursive'],
        'cookie': ['Cookie', 'cursive'],
        'kaushan': ['Kaushan Script', 'cursive'], // Logo
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient': 'gradient 8s ease infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1877f2 0deg, #42b72a 180deg, #1877f2 360deg)',
      },
    },
  },
  plugins: [],
}
