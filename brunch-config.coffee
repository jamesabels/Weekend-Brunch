exports.config =
# See http://brunch.io/#documentation for docs.
  files:
    javascripts:
      joinTo: {
        'js/app.js': /app[\\/]js[\\/]/,
        'js/vendor.js': /app[\\/]vendnor[\\/]/,
        'js/modules.js': /app[\\/]modules[\\/]/,
      },
    stylesheets:
      joinTo: 'app.css'
    templates:
      joinTo: 'templates.js'

  plugins:
# Compile SASS
    sass:
      mode: 'native'
# Compile ES2015 Syntax
    babel:
      babelrc: true
      pattern: /\.(es6|jsx)$/
#    Further process your CSS
    postcss:
      processors: [
        require('autoprefixer')(['last 8 versions']),
      ]
#  MODULE SETTINGS
  modules: {
    wrapper: "commonjs"
  }