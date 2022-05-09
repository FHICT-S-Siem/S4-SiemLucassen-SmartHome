module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F3B52',
        'secondary': '#66738B',
        'dark-primary': '#0E1115',
        'dark-secondary': '#66738B',
        'dark-canvas': '#1D222D',
      }
    },
  },
  plugins: [],
}
