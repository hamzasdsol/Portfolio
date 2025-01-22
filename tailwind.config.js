/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetBrains: ['JetBrainsMono', 'monospace'], 
      },
      fontWeight: {
        extraLight: 200,
        light: 300,
        normal: 400,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
      },
      animation: {
        'spin-slow': 'spin-slow 15s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
