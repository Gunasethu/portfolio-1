/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "inter": ["Inter"]
    },
    extend:{
      spacing: {
        '2px': '2px',
      }
    }
  },
  plugins: [],
}
