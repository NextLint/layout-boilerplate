const { src, dest } = require('gulp')
// const pug = require('gulp-pug')
const plumber = require('gulp-plumber')

// module.exports = function html() {
//     return src('src/app/*.pug')
//         .pipe(plumber())
//         .pipe(pug())
//         .pipe(dest('build'))
// }

module.exports = function html() {
    return src('src/app/*.html')
        .pipe(plumber())
        .pipe(dest('build'))
}