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
      boxShadow: {
        "3xl": "80px 80px 10px 0",
      },
      borderRadius: {
        'large': '90px', 
        'srounded': '10px', 
      },
      backgroundImage: {
        'bg-geocode': "url('/src/assets/images/bggeocode.png')",
      }
    },
  },
  plugins: [daisyui],
};
