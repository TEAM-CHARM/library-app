/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Ubuntu", "sans-serif"],
      },
      colors:{
        primary:{
          main:"#C1C1C1",
        }
      }
    },
  },
  plugins: [],
};
