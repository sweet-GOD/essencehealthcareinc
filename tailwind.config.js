/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#3ba934",
        brightColor: "#3ba934",
        backgroundColor: "#36ae9a",
      },
    },
  },
  plugins: [],
};
