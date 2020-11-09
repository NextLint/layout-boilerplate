const { src, dest } = require('gulp');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

module.exports = function svgSprite() {
  return src('app/img/sprite/*.svg')
    .pipe(
      svgstore({
        inlineSvg: true,
      })
    )
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img'));
};
