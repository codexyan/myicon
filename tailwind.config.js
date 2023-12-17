/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        spectral: ["Spectral", "serif"],
      },
      width: {
        1140: "72rem",
      },
      backgroundImage: {
        "hero-banner": "url('/src/assets/img/banner/hero-banner-1.svg)",
        "wedding-banner": "url('/src/assets/img/banner/bg-white.png)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
