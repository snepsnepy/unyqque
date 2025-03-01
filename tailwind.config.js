module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
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
    extend: {},
  },
  plugins: [],
};
