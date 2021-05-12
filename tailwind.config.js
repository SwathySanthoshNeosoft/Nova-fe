module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000000',
        orange: '#EC2028',
        white: '#FFFFFF',
        'suva-grey': '#8A8A8A',
        'light-green': '#4D83A1',
        'button-green': '#0F283B',
        'text-grey': '#8D8989',
        'text-green': '#0F283B',
        'whisper': '#E5E5E5',
        'tangaroa': '#00263D',
        'hippie-blue': '#4D83A1',
        'tangaroa-b': '#0F283B',
        'spring-green': '#0A7B37',
        'dark-gray': '#ADABAB',
        'alice-blue': '#FDFEFF',
        'silver': '#C4C4C4',
        'white-smoke': '#F3F3F3',
        'grey80': '#837F7F',
        'white-smoke2': '#F6F6F6',
        'scarlet': '#FB1E1E',
        'whisper2': 'EAEAEA',
        'dark-gray2': 'B5ACAC',
        'silver35': '#C4C4C4',
        'silver2': '#C6C5C5',
        'paris-m': '#342A5B',
        'teal': '#0B7786',
        'night-rider': '#313030',
        'nobel': '#969393',
        'pink-swan': '#B7B4B4',
        'charcoal': '#484444',
        'ferra': '#7B7171',
        'whisper60': '#E5E5E5',
        'whisper53': '#E5E5E5',
        'azure': '#FAFBFB',
        'suva-gray2': '#8D8989',
        'eclipse': '#3E3B3B',
      },
      opacity: {
        '31': '0.31',
        '35': '0.35',
        '53': '0.53'
      },
      fontFamily: {
        'sans': 'Nunito',
        'font-poppins': 'poppins',
        'font-roboto': 'roboto',
        'font-raleway': 'raleway'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66.66%',
        '3/4': '75%',
        '8/10': '80%'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      width: {
        'lg': '31.75rem'
      },
      height: {
        'xl': '32rem'
      },
      lineHeight: {
        '3xs': '0.625rem',
        '2xs': '1.125rem',
        'xs': '1.875rem',
        'sm': '3.375rem'
      },
      boxShadow: {
        'form': '0px 4px 10px rgba(0, 0, 0, 0.25)'
      },
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'grey': '#ADABAB',
       }),
      borderRadius: {
        'primary': '0.625rem'
      },
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
}