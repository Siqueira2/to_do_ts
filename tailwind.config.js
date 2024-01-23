/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#CCC2FE",
          400: "#7E64FF",
          600: "#2B135A",
          900: "#110824",
        },
      },
    },
  },
  plugins: [],
};
