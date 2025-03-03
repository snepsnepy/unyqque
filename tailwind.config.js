import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  plugins: [animate, setupInspiraUI, require("daisyui")],
  theme: {
    screens: {
      sm: "768px",
      // => @media (min-width: 576px) { ... }

      md: "1024px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "2rem",
        lg: "108px",
      },
    },
    fontFamily: {
      neue: ["Neue"],
      montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        primary: "#83E5DE",
        "primary-hover": "#49ada7",
        "primary-content": "#FFFFFF",
        neutral: "#444444",
      },
    },
  },
};
