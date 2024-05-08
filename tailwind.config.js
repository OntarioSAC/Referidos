/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-ontario-color": "rgb(80 7 36)",
        'bg-ontario-color': "#92c021",
      },
    },
  },
  plugins: [],
};
