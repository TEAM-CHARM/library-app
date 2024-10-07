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
          main:"#00A96C",
          dark:"",
          light:""
        },
        secondary:{
          main:"",
          light:"",
          dark:"",
        },
        background:{
          main:"#E3E3E3", 
          light:"",
          dark:""
        }
      }
    },
  },
  plugins: [],
};
