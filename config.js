// /* global module */

let config = {
  'notGetBlocks': [
    'blocks-demo.html',
  ],
  'ignoredBlocks': [
    'no-js',
  ],
  'alwaysAddBlocks': [
    'modernizr',
    // 'owl-carousel',
    // 'sprite-svg',
    // 'sprite-png',
    // 'object-fit-polyfill',
  ],
  'addStyleBefore': [
    'src/scss/variables.scss',
    'src/scss/mixins.scss',
    // 'somePackage/dist/somePackage.css', // для 'node_modules/somePackage/dist/somePackage.css',
  ],
  'addStyleAfter': [
    // 'src/scss/print.scss',
  ],
  'addJsBefore': [
    // 'somePackage/dist/somePackage.js', // для 'node_modules/somePackage/dist/somePackage.js',
  ],
  'addJsAfter': [
    './script.js',
  ],
  'addAssets': {
    // 'src/img/demo-*.{png,svg,jpg,jpeg}': 'img/',
    // 'src/fonts/demo-empty-open-sans.woff2': 'fonts/',
    'src/fonts/MADE Soulmaze Brush PERSONAL USE.otf': 'fonts/',
    'src/fonts/MADE Soulmaze Italic PERSONAL USE.otf': 'fonts/',
    'src/fonts/MADE Soulmaze Outline Italic PERSONAL USE.otf': 'fonts/',
    'src/fonts/MADE Soulmaze Outline PERSONAL USE.otf': 'fonts/',
    'src/fonts/MADE Soulmaze PERSONAL USE.otf': 'fonts/',
    'src/favicon/*.{png,ico,svg,xml,webmanifest}': 'img/favicon',
    // 'node_modules/somePackage/images/*.{png,svg,jpg,jpeg}': 'img/',
  },
  'dir': {
    'src': 'src/',
    'build': 'build/',
    'blocks': 'src/blocks/'
  },
  'optionsGHpages': {
    'remote': 'business-agency', // options for github-pages
  }
};

module.exports = config;
