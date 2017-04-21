'use strict'

const sass = require('gulp-sass')

const config = require('../config/config')

module.exports = (gulp) => {
  gulp.task('style', function () {
    return gulp.src(config.style.entry)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(config.style.dest))
  })
}
