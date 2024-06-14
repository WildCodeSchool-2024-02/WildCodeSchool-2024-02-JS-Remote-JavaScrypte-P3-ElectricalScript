/** @type {import('tailwindcss').Config} */

const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        GreenComp: "#21A867",
        GreyComp: "#333939",
        SoftDark: "#242424",
        GreenBlue: "#21A89A",
      },
      fontFamily: {
        main: ['"Alata"', "sans-serif"],
        paraph: ['"Red Hat Display"', "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
};
