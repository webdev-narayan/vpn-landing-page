/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app_red: "#F53838",
        app_text: "#0B132A",
        app_text_light: "#4F5665"
      }
    },
  },
  plugins: [],
}

