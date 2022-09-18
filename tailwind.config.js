/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,
      // or have default horizontal padding
      padding: "1rem",
      // default breakpoints but with 40px removed
      screens: {
        sm: "576px",
        md: "768px",
        lg: "922px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
