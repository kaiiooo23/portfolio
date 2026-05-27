/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./assets/**/*.js", "./src/**/*.css"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#25ab75',
          dark: '#208c61'
        },
        bgPrimary: '#1a1a1a',
        bgSecondary: '#242424',
        bgFooter: '#151515',
        textColor: '#676767',
        borderColor: '#373737'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', '-apple-system', 'sans-serif']
      },
      fontSize: {
        'sm': '1.4rem',
        'base': '1.6rem',
        'lg': '2rem',
        'xl': '2.4rem',
        '2xl': '3.2rem',
        'biggest': 'clamp(3rem, 8vw, 5rem)'
      },
      spacing: {
        'header': '10rem',
        'header-scroll': '8rem'
      },
      maxWidth: {
        'container': '98rem'
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      },
      boxShadow: {
        'custom': '0px 4px 10px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}