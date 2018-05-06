const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');


var extractPlugin = new ExtractTextPlugin({
   filename: './assets/css/bundle.css' // scss轉css後另存的目標檔名
});

module.exports = [{
  entry: ['./assets/pre/css/index.scss'],
  output: {
    filename: './assets/style-bundle.js', // no useful
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.scss$/,
              use: extractPlugin.extract({
                use: [
                    'css-loader',
                    'sass-loader'
                ]
          })
        }
      ]
  },
  plugins: [
    extractPlugin
  ],
}];

module.exports.push({
  entry: ["./assets/pre/js/index.js"],
  output: {
    filename: "./assets/js/bundle.js"
  },
  devtool:'source-map',
  module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
        }
    ]
  },
  node: {
     fs: 'empty',
     dgram: 'empty',
     fs: 'empty',
     net: 'empty',
     tls: 'empty',
     child_process: 'empty'
 },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(function(){
     }),
     new webpack.ProvidePlugin({
         'window.jQuery'    : 'jquery',
         'window.$'         : 'jquery',
         'jQuery'           : 'jquery',
         '$'                : 'jquery'
     }),
  ]
});
