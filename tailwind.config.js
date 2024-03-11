/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   current: 'currentColor',
    //   'krem': '#ebc49f',
    //   'koneeng': '#f1ef99',
    //   'koneeng-lebih-gelap': '#dbba3a',
    //   'merah-lembut': '#D37676',
    //   'ijo-lumut': '#b0c5a4'
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
