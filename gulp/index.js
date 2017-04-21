'use strict'

module.exports = (gulp) => {
  const runSequence = require('run-sequence').use(gulp)

  require('./tasks/bundle')(gulp)
  require('./tasks/copy')(gulp)
  require('./tasks/inject')(gulp)
  require('./tasks/lint')(gulp)

  gulp.task('default', function (cb) {
    runSequence('lint', ['bundle', 'copy:assets'], 'inject', cb)
  })
}
