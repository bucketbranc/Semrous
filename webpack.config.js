const path = require('path');

module.exports = {
  entry: './out-tsc/Xero/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'Xero.js',
  },
  devtool: "source-map"
};