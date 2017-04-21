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
      './dist/bundle.js'
    ],
    dest: './dist'
  },
  lint: {
    files: [
      './src/**/*.js',
      './src/**/*.vue',
      './gulp/**/*'
    ]
  }
}
