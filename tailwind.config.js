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
        NavBg: "var(--nav-bg)",
        PurpleOne: "var(--purple-1)",
        PurpleTwo: "var(--purple-2)",
        AshMain: "var(--ash-1)",
      },
    },
  },
  plugins: [],
};
