/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important:"#root",
  theme: {
    extend: {
      colors: {
        "product-yellow": "#F3BC34",
      },
      fontFamily: {
        product: ["Satoshi", "sans-serif"],
      },
      scale: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
