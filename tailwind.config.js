/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdIphone: '933px',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

