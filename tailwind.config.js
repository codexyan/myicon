/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Sans-serif"],
      },
      width: {
        "1140": "72rem",
      },
      backgroundImage: {
        "hero-banner": "url('/src/assets/img/banner/hero-banner-1.svg)"
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
