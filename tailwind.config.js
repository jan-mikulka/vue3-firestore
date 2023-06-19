/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      red: "red",
      //primary (red)
      primary: "#8F423D",
      "primary-light": "#956B68",
      //secondary (blue)
      secondary: "#94ACB0",
      "secondary-light": "#D3DCDC",
      //gray
      "dark-grey": "#231F20",
      grey: "#4D4748",
      "light-grey": "#F7F6F5",
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
