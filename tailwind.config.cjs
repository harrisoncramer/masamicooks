/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Helvetica'],
      serif: [],
      display: ['Nugelo'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      'lg-plus': '1.3rem',
      xl: '1.55rem',
      '2xl': '1.8rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      'app-white': '#fffaf3',
      'app-black': '#2c1810',
      'app-header': '#f8b591',
      'app-theme': '#d94030',
      'app-theme-light': '#f4473a',
      'app-background': '#fff5e1',
      'app-background-dark': '#e6ddcc',
      'app-brown': '#5c3a21',
      'app-brown-light': '#8b6914',
      'app-mustard': '#c8a415',
      'app-mustard-light': '#f0d060',
      'app-olive': '#6b7c3f',
      'app-rust': '#b5451b',
      'app-muted': '#8b7355',
      'app-text': '#3d2b1f',
      'app-text-light': '#6b5544',
      'app-border': '#e0d2be',
    },
    extend: {
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
      transitionProperty: {
        height: 'height',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
