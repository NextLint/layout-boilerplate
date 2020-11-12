const gulp = require('gulp');

const images = require('./images');
const styles = require('./styles');
const html = require('./html');
const scripts = require('./scripts');
// const svgSprite = require('./svgSprite')

const server = require('browser-sync').create();

function readyReload(cb) {
  server.reload();
  cb();
}

module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true,
  });

  gulp.watch(
    'src/img/*.{gif,png,jpg,svg,webp}',
    gulp.series(images, readyReload)
  );
  // gulp.watch('src/img/sprite/*.svg', gulp.series(svgSprite, readyReload))
  gulp.watch(
    'src/css/**/*.scss',
    gulp.series(styles, (cb) =>
      gulp.src('build/css').pipe(server.stream()).on('end', cb)
    )
  );
  gulp.watch('src/js/**/*.js', gulp.series(scripts, readyReload));
  gulp.watch('src/*.html', gulp.series(html, readyReload));

  return cb();
};
