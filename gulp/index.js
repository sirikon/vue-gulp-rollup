'use strict'

module.exports = (gulp) => {
  const runSequence = require('run-sequence').use(gulp)

  require('./tasks/bundle')(gulp)
  require('./tasks/copy')(gulp)
  require('./tasks/inject')(gulp)
  require('./tasks/lint')(gulp)
  require('./tasks/style')(gulp)
  require('./tasks/watch')(gulp)

  gulp.task('default', function (cb) {
    runSequence('lint', ['bundle', 'copy:assets', 'style'], 'inject', cb)
  })

  gulp.task('dev', function (cb) {
    runSequence('default', 'watch', cb)
  })
}
