'use strict'

const config = require('../config/config')

module.exports = (gulp) => {
  gulp.task('watch', function () {
    gulp.watch(config.bundle.files, ['lint', 'bundle'])
    gulp.watch(config.style.files, ['style'])
  })
}
