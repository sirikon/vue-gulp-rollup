'use strict'

const config = require('../config/config')

module.exports = (gulp) => {
  gulp.task('copy:assets', function () {
    return gulp.src(config.copy.assets.files)
      .pipe(gulp.dest(config.copy.assets.dest))
  })
}
