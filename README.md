# Vue Gulp Rollup #

![dev dependencies](https://david-dm.org/sirikon/vue-gulp-rollup/dev-status.svg)

Example project which uses Vue (.vue files), Gulp and Rollup

## Build & Run ##

```bash
npm install

# Single build
npm run build

# Build and start watching for changes
npm run dev
```

## Technical Decisions ##

 - __Gulp and Rollup__: Because are simpler and fit my needs.
 - __Only using .vue files for javascript and template__: This is because having css/postcss/sass/less/whatever inside .vue files required some things I don't like:
   - Rollup plugin for Vue required some _not so clear_ code to get it working with SASS or LESS
   - Rollup plugin for Vue works nicely with CSS Modules, but at the moment I don't work with CSS Modules, and doesn't like at all the idea of `import clasNames from './style.css'`. 
 - __Library imports are fake__: Loading in memory and tree-shaking a library that is already lightweight and minified seems completely unnecesary. Not importing the library and using `gulp-concat` later is way more efficient and speeds up the development time taking down the compilation time.
 - __Vue's default config for ESLint__: I'm not fully convinced of the idea of 2 spaces instead of tabs, or prohibiting semicolons... but seems like it's the Vue's standard.
 - __Hot reload not included__: I'll not add more code to the build process just to avoid hitting F5.
 - __Static web server not included__: Useful for demos, mostly useless for real world, If you need it, use [http-server](https://www.npmjs.com/package/http-server) in CLI or npm script.
 - __Building-related files (gulpfile.js and everything inside gulp folder) MUST run as-is in Node (No transpilation required)__: It's just unnecessary, latest node versions already have arrow functions, classes and all that fancy syntactic sugar, and doing `require()` instead of `import` isn't THAT bad, deal with it.
 - __Bublé__: From my experience, it's much faster and simpler than Babel, and plays well with Rollup ([just see the plugin implementation](https://gitlab.com/Rich-Harris/rollup-plugin-buble/blob/master/src/index.js)).
 - __npm dependencies versions with just minor patches__: You already know what SEMVER is and what the world thinks SEMVER is, so better be a bit more secure.

## License ##

MIT
