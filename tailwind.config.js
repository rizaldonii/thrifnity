/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"]
      },
      colors: {
        custom: {
          sage: "#3E918D",
          white: "#f6f6f6",
        },
      },
    },
  },
  plugins: [],
};
