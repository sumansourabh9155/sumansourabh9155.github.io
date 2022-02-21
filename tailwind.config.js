module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#060531",
        text1: "#A09FDF",
        stroke: "00D1FF",
        selected_text: "#A3A3FF",
        theme: "#3F3FFF",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        input_border: "#565666",
        input: "#2A2A35",
      },
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
    },
  },
  plugins: [],
};
