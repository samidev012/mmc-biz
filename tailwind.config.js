/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        paper: "#F5F6F4",
        steel: "#5B6472",
        line: "#E3E5E0",
        signal: "#F2A93B",
        circuit: "#2FB6A6",
      },
      fontFamily: {
        sans: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};