'use strict'

const vue = require('rollup-plugin-vue')
const rollup = require('rollup-stream')
const buble = require('rollup-plugin-buble')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const addsrc = require('gulp-add-src')
const concat = require('gulp-concat')
const fakeImport = require('../rollup/fakeImport')
const config = require('../config/config')

module.exports = (gulp) => {
  gulp.task('bundle', function () {
    return rollup({
      plugins: [
        vue({ css: false }),
        fakeImport(config.bundle.fakeImports),
        buble()
      ],
      entry: config.bundle.entry,
      format: 'es'
    })
      .pipe(source(config.bundle.destFileName))
      .pipe(buffer())
      .pipe(addsrc.prepend(config.bundle.vendors))
      .pipe(concat(config.bundle.destFileName))
      .pipe(gulp.dest(config.bundle.dest))
  })
}
