const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'single-spa-config.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/'
  },
  watch: true
};