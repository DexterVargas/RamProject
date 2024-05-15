/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D5B79",
        secondary: "#2ec0bb",
        heading: "#233036",
        body: "#667074",
        light: "#f6f6f6",
        yellowLight: "#fff3d9",
        greenLight: "#ccf0ee",
        purpleLight: "#aea3e1",
      },
    },
  },
  plugins: [],
}

