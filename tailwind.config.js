 {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandTeal: '#47A4A1', // Figma से मुख्य रंग
        brandGold: '#D99E4B', // बटन का रंग
      },
    },
  },
  plugins: [],
}

