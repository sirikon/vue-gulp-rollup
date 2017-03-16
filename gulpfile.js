'use strict';

const gulp = require('gulp');
const rollup = require('gulp-rollup');
const vue = require('rollup-plugin-vue');
const nodeResolve = require('rollup-plugin-node-resolve');
const replace = require('rollup-plugin-replace');

gulp.task('bundle', function() {
  gulp.src([
      './src/**/*.js',
      './src/**/*.vue',
      './node_modules/vue/dist/**/*'
    ])
    .pipe(rollup({
        plugins: [
            nodeResolve({ jsnext: true, main: true }),
            vue({ css: './dist/style.css', autoStyles: true }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development'),
                'process.env.VUE_ENV': JSON.stringify('browser')
            })
        ],
        entry: './src/main.js'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy:assets', function() {
    gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['bundle']);
});

gulp.task('default', ['bundle', 'copy:assets', 'watch']);
