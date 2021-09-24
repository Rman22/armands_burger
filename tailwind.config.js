module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
         'pallete1' : '#FEC89A',
         'pallete2' : '#F9DCC4',
         'pallete3' : '#F8EDEB',
         'pallete4' : '#FCD5CE',
         'pallete5' : '#FFB5A7',
         'pallete6' : '#dc7f24'
         
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
