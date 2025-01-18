/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#262627",
        secondary: "#fe4918",
        tertiary: "rgb(6, 167, 6)",
        quaternary: "rgb(255, 138, 4)",
        quinary: "#8d93a0",
        greenPrimary: "rgb(6, 167, 6)",
        silver: "#C0C0C0",
        bronze: "#CD7F32",
      },
      backgroundImage: {
        headerBg: "url(/images/headerBg.jpg)",
        counterBg: "url(/images/bg-shiraz3.jpg)",
        speakersBg: "url(/images/devopslogo.png)",
        shirazBg: "url(/images/bg-shiraz1.jpg)",
        location: "url(/images/shirazuni.jpg)",
      },
      dropShadow: {
        primary: "3px 3px 2px rgb(5, 5, 24)",
        secondary: "10px 10px rgb(2, 66, 1)",
        tertiary: "1px 1px 0 red",
        timer: "5px 5px black",
      },
      screens: {
        "2xl": { max: "1536px" },
        xl: { max: "1279px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
      },
      backgroundSize: {
        20: "5rem",
      },
    },
  },
  plugins: [],
};
