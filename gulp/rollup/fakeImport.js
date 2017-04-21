'use strict'

/*
 * Fake Import - Rollup Plugin
 *
 * This plugin transform imports into... nothing.
 *
 * Used to prevent rollup from reading large dependencies
 * which already have a minified version that can be bundled
 * more efficiently with Gulp.
 *
 * This enables you to bundle just your code, keep the
 * imports, and add the bigger dependencies later.
 *
 * for example:
 *      {'Vue': 'vue'}
 * Will fake:
 *      import Vue from 'vue'
 */

const buildImportId = (key) =>
  '__fakeImport__' + key + '__'

module.exports = function (fakeImports) {
  const importNameIndex = {}
  const importIdIndex = {}

  Object.keys(fakeImports)
    .forEach(objectName => {
      importNameIndex[fakeImports[objectName]] = true
      importIdIndex[buildImportId(fakeImports[objectName])] = objectName
    })

  return {
    name: 'fakeImport',
    resolveId: function (importee, importer) {
      if (importNameIndex[importee]) {
        return buildImportId(importee)
      }
    },
    load: function (id) {
      if (importIdIndex[id]) {
        return 'export default ' + importIdIndex[id]
      }
    }
  }
}
