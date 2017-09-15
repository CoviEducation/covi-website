let BroccoliSass = require('broccoli-sass');
let merge = require('broccoli-merge-trees');
let autoprefixer = require('broccoli-autoprefixer');

let tree = 'src';

let styles = new BroccoliSass(['src'], 'styles/app.scss', 'styles/app.css');
styles = autoprefixer(styles, {
  browsers: 'last 2 versions'
});

module.exports = merge([ tree, styles ]);
