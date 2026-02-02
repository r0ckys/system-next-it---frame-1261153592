/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-700": "var(--gray-700)",
        "gray-900": "var(--gray-900)",
        neutralwhite: "var(--neutralwhite)",
      },
      fontFamily: {
        "subtitle-1-18": "var(--subtitle-1-18-font-family)",
      },
    },
  },
  plugins: [],
};
