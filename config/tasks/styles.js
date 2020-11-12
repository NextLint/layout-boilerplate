const { src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

module.exports = function styles() {
  return src('src/css/*.{scss,css}')
    .pipe(plumber())
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(shorthand())
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: '*',
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('build/css'));
};
