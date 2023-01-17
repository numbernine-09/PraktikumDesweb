/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mycolor: {
          DEFAULT: "#7b99b9",
          dark: "#517dad",
        },
      },
    },
  },
  varians: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [],
};
