/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1800px',
        '4xl': '1900px',
        // Media queries to detect the user’s input modality real, non-simulated hover support.
        'can-hover': {
          raw: '(hover: hover)'
        },
        'no-hover': {
          raw: '(hover: none)'
        },
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1320px',
          '3xl': '1440px',
        },
        center: true,
        padding: '.75rem',
        margin: '0 auto',
      },
      colors: {
        primary: "#E82223",
        baseBlack: "#121212",
        baseWhite: "#FFF",
        gray100: "#FAFAFA",
        gray200: "#77869E",
        gray300: "#64738C",
        gray400: "#BBC3CF",
        gray500: "#4D4D4D",
        rate: "#ECD03F",
        blue500: "#0DAFC0",
        transparent: 'transparent',
        current: 'currentColor',
      },
      backgroundImage: {
        imgPlaceholder: "linear-gradient(180deg, rgba(0, 0, 0, 0) 41.03%, rgba(0, 0, 0, 0) 41.03%, rgba(0, 0, 0, 0.8) 84.62%)"
      },
      fontSize: {
        '11xl': '6.25rem', // 100px
        '10xl': '4.5rem', // 72px
        '9xl': '3.5rem', // 56px
        '8xl': '2.75rem', // 44px
        '7xl': '2.5rem', // 40px
        '6xl': '2rem', // 32px
        '5xl': '1.75rem', // 28px
        '4xl': '1.625rem', // 26px
        '3xl': '1.5rem', // 24px
        '2xl': '1.375rem', // 22px
        xl: '1.25rem', // 20px
        lg: '1.125rem', // 18px
        base: '1rem', // 16px
        sm: '0.875rem', // 14px
        xs: '0.75rem', // 12px
      },
      lineHeight: {
        // Basic set of line heights. Major text styles tend to have their custom line height.
        none: '1',
        tighter: '1.125',
        tight: '1.25',
        // snug: '1.375',
        normal: '1.5',
        relaxed: '1.75', // Default Tailwind is 1.625.
        // loose: '2',
      },
      letterSpacing: {
        tightest: '-2px',
        tighter: '-1px',
        tight: '-0.5px',
        normal: '0',
        // wide: '0.5px',
        wider: '1px',
        // widest: '2px',
      },
      boxShadow: {
        shallow: '0px 10px 15px 0px rgba(200, 201, 205, 1)',
        default: '0 2px 8px 0 rgba(6, 32, 93, 0.1)',
      },
      borderRadius: {
        small: '4px',
        medium: '12px',
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in forwards',
        fadeOut: 'fadeOut 500ms ease-out forwards',
        fadeInSlow: 'fadeIn 1000ms ease-in forwards',
        fadeOutSlow: 'fadeOut 1000ms ease-out forwards',
        scaleIn: 'scaleIn 300ms ease-in forwards',
        rotate: 'rotate 1s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          },
        },
        fadeOut: {
          '100%': {
            opacity: 1
          },
          '0%': {
            opacity: 0
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        },
        rotate: {
          '100%': {
            transform: 'rotate(360deg)'
          },
        },
      },
      transitionDuration: {
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
        3500: '3500ms',
        5000: '5000ms',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}