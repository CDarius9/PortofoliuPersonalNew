/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0066ff',
        'primary-dark': '#0052cc',
        'primary-light': '#60A5FA',
        'dark': '#0a192f',
        'dark-800': 'rgba(0, 0, 0, 0.85)',
        'dark-700': 'rgba(0, 0, 0, 0.75)',
        'light-text': '#e6f1ff',
        'secondary-text': '#8892b0',
        'card-bg': 'rgba(255, 255, 255, 0.03)',
        'card-border': 'rgba(255, 255, 255, 0.08)'
      },
      fontFamily: {
        'sans': ['Space Grotesk', 'Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float 8s ease-in-out infinite reverse',
        'bounce-slow': 'bounce 2s infinite',
        'blink': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#0066ff' },
        },
      },
      backdropFilter: {
        'blur-md': 'blur(8px)',
        'blur-sm': 'blur(4px)',
      },
    },
  },
  plugins: [],
}