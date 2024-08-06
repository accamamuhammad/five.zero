/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "400px",
      },
      colors: {
        SecBg: "#3B3B3B",
        TetBg: "#DFDFDF",
        GreenNew: "#5DCCA0",
        DarkNew: "#0A0A0A",
        PinkNew: "#CB9BFA",
        BlueNew: "#6CB4EE",
      },
    },
  },
  plugins: [],
};
