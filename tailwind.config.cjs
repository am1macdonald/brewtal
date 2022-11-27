/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montagu)', ...fontFamily.sans],
        mono: ['var(--font-overpass)',...fontFamily.mono],
      },
    },
  },
  plugins: [],
};