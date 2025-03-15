/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "open-sans", "sans-serif"],
        title: ["Montserrat", "montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      animation: {
        "bounce-pulse":
          "bounce 1s infinite, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
