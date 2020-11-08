const { series } = require('gulp')

const clean = require('./config/tasks/clean.js')
const pugHtml = require('./config/tasks/pug.js')
const styles = require('./config/tasks/styles.js')
const scripts = require('./config/tasks/scripts.js')
const images = require('./config/tasks/images.js')
const fonts = require('./config/tasks/fonts.js')
// const svgSprite = require('./tasks/svgScprite.js')
const server = require('./config/tasks/server.js')

const build = series(clean, pugHtml, styles, scripts, images, fonts)

exports.build = series(build)
exports.raise = series(build, server)