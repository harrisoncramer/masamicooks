module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
      serif: [],
      display: ["Staatliches"]
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'app-white': '#ffffff',
      'app-blue': '#2fb6ff',
      'app-purple': '#7e5bef',
      'app-pink': '#ff49db',
      'app-orange': '#ff7849',
      'app-green': '#13ce66',
      'app-yellow': '#ffc82c',
      'app-gray-dark': '#273444',
      'app-gray': '#ebebf2',
      'app-gray-light': '#f8f8ff',
    },
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
