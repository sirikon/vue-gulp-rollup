'use strict'

const inject = require('gulp-inject')

const config = require('../config/config')

module.exports = (gulp) => {
  gulp.task('inject', function () {
    var target = gulp.src(config.inject.target)
    var sources = gulp.src(config.inject.sources)
    return target
      .pipe(gulp.dest(config.inject.dest))
      .pipe(inject(sources, {
        relative: true,
        addSuffix: '?t=' + Date.now()
      }))
      .pipe(gulp.dest(config.inject.dest))
  })
}
