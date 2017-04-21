'use strict'

const eslint = require('gulp-eslint')

const config = require('../config/config')

module.exports = (gulp) => {
  gulp.task('lint', function () {
    return gulp.src(config.lint.files)
      .pipe(eslint())
      .pipe(eslint.format())
  })
}
