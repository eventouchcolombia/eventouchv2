/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html", 
      "./src/**/*.{js,ts,jsx,tsx}" // Asegura que Tailwind escanee todos los archivos relevantes
    ],
    theme: {
      extend: {
        colors: {
          "purple-color": "rgba(92, 41, 112, 1)",
          "whiteColor": "#ffffff",
        },
        fontFamily: {
          montserrat: ["Montserrat", "sans-serif"],
          cinzel: ["Cinzel", "serif"],
          merienda: ["Merienda", "cursive"],
        },
      },
    },
    plugins: [],
    darkMode: "class", // Habilita el modo oscuro con la clase "dark"
  };
  