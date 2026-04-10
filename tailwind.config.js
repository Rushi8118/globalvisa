/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          800: '#1e1b4b',
          900: '#0f0e2a',
          950: '#07061a',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
      },
    },
  },
  plugins: [],
}