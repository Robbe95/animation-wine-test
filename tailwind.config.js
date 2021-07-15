module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#822C40",
        secondary: "#AC8C91",
        accent: "#450D16",
        details: "#A86E7F"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
