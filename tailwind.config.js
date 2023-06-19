/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // "./index.html",
    // "./src/App.vue",
    // "./src/main.js",
    // "./src/views/HomeView.vue",
    // "./src/components/TheWelcome.vue",
    // "./src/components/TheHeader.vue",
    // "./src/components/TheFooter.vue",
    // "./src/components/TheCustom.vue",

    "./src/**/*.{html,js,vue}",
    "./src/**/*.{html,js,vue}",
  ],
  theme: {
    extend: {
      keyframes: {
        showStandard: {
          "0%": { opacity: "0%" },
          "50%": { opacity: "50%" },
          "100%": { opacity: "100%" },
        },
        showSlow: {
          "0%": { opacity: "0%" },
          "80%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        appear: "showSlow 1s ease-in ",
        appearSlow: "showSlow 3s ease-in",
      },
    },
  },
  plugins: [],
};
