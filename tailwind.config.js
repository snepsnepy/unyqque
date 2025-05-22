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
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "108px",
      },
    },
    fontFamily: {
      neue: ["Neue"],
      montserrat: ["Montserrat"],
      delight: ["Delight"],
    },
    extend: {
      colors: {
        primary: "#BF9264",
        "primary-hover": "#49ada7",
        "primary-content": "#FFFFFF",
        "base-content": "#FBF8EF",
        neutral: "#322C2B",
      },
      backgroundImage: {
        "custom-bg": "url('@/assets/img/background.png')",
      },
    },
  },
};
