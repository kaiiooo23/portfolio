/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./assets/**/*.js",
    "./*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        titanium: {
          950: '#09090b',
          900: '#121215',
          800: '#18181b',
          700: '#27272a',
          600: '#3f3f46',
          border: 'rgba(255, 255, 255, 0.1)',
          glow: 'rgba(255, 255, 255, 0.15)'
        },
        primary: {
          DEFAULT: '#000000',
          dark: '#171717',
          light: '#ffffff'
        },
        dark: {
          DEFAULT: '#09090b',
          card: '#121215',
          border: '#27272a'
        },
        light: {
          DEFAULT: '#fafafa',
          card: '#ffffff',
          border: '#e5e5e5'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', '-apple-system', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scale-up': 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      boxShadow: {
        'glow-white': '0 0 25px -5px rgba(255, 255, 255, 0.15)',
        'glow-silver': '0 0 30px rgba(255, 255, 255, 0.12)',
        'glow-card': '0 0 35px rgba(255, 255, 255, 0.08)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}