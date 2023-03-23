/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#rgba(241, 241, 241, 1)",
        secondary: "rgba(25, 84, 15, 1)",
        tertiary: "#D1DBFF",
        quarternary: "rgba(137, 137, 137, 1)",
        grey: "rgba(217, 217, 217, 1)",
        blue: "blue",
        pink: "pink",
        maroon: "rgba(94, 57, 55, 1)",
        yellow: "rgba(254, 195, 82, 1)",
        black: "rgba(32, 32, 32, 1)",
        green: "rgba(0, 0, 0, 0.22)",
        overlay: "rgba(0, 117, 73, 1)",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-backdrop": "url('/src/assets/windvanes.jpg')",
        map: "url('/src/assets/world-map-africa.svg')",
        backdrop: "url('/src/assets/backdrop.png')",
        sectiondrop: "url('/src/assets/participate.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "100vw": "100vw",
        "90vw": "90vw",
        "100%": "100%",
        "90%": "90%",
        "80%": "80%",
        "70%": "70%",
        "60%": "60%",
        "55%": "55%",
        "50%": "50%",
        16: "4rem",
      },
      backgroundPosition: {
        bottom: "bottom",
        "bottom-6": "center bottom 6.4rem",
        center: "center",
        "center-6": "center top 44.4rem",
        left: "left",
        "left-bottom": "left bottom",
        "left-top": "left top",
        right: "right",
        "right-bottom": "right bottom",
        "right-top": "right top",
        top: "top",
        "top-4": "center top 1rem",
      },
    },
  },
  plugins: [],
};
