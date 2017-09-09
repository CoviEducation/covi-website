let BroccoliSass = require('broccoli-sass');
let merge = require('broccoli-merge-trees');

let tree = 'src';

let styles = new BroccoliSass(['src'], 'styles/app.scss', 'styles/app.css');

module.exports = merge([ tree, styles ]);
