/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow-reverse': 'spin-reverse 10s linear infinite',
      },
      fontFamily: {
        baseText : ['"Instrument Sans"'],
        headingText : ['"Island Moments"'],
        mediumText : ['"Halant"']
      },
      colors: {
        primary : "#f25d2c"
      }
    }
  },
  plugins: [],
}

