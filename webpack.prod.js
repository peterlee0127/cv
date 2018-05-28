const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
});

module.exports = merge(common, {
  plugins: [
     new UglifyJSPlugin({
       sourceMap: false
     })
  ]
});
