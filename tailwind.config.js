module.exports = {
    content: ["./index.html", 
    "./index2.html",
    "./index.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
    theme: {
      extend: {
        fontFamily : {
          "main": ['Montserrat'],
        },
        colors: {
          'Champagne': ['#F7EDE8'],
           'alice_blue': ['#EDF3F7'],
        },
        boxShadow: {
          'firm': ['box-shadow: 3px 3px 2px 0px rgba(34, 60, 80, 0.25)'],
          'epi': ['box-shadow: 10px 10px 2px 0px rgba(129, 173, 200, 0.25)'],
        },
        maxWidth: {
          '3.1xl' : ['49rem'],
          '29rem' : ['29rem'],
          '8xl': ['1840px'],
        },
        width: {
          '576px': ['576px'],
        },
      },
    },
    plugins: [require("tw-elements/dist/plugin.cjs")]
  }