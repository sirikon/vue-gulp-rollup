'use strict'

module.exports = {
  bundle: {
    entry: './src/app/main.js',
    files: [
      './src/app/**/*.js',
      './src/app/**/*.vue'
    ],
    fakeImports: {
      'Vue': 'vue'
    },
    vendors: [
      './node_modules/vue/dist/vue.js'
    ],
    destFileName: 'bundle.js',
    dest: './dist'
  },
  copy: {
    assets: {
      files: './src/assets/**/*',
      dest: './dist/assets'
    }
  },
  inject: {
    target: './src/index.html',
    sources: [
      './dist/bundle.js',
      './dist/main.css'
    ],
    dest: './dist'
  },
  lint: {
    files: [
      './gulpfile.js',
      './src/**/*.js',
      './src/**/*.vue',
      './gulp/**/*'
    ]
  },
  style: {
    entry: './src/style/main.scss',
    files: [
      './src/style/**/*.scss'
    ],
    dest: './dist'
  }
}
