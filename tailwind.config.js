module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica'],
      serif: [],
      display: ['Playfair'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'app-white': '#ffffff',
      'app-theme': '#d00000',
      'app-background': '#ffffff',
      'app-gray': '#ebebf2',
      'app-gray-light': '#f8f8ff',
    },
    extend: {
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
