const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

// const extractSass = new ExtractTextPlugin({
//     filename: "[name].[contenthash].css",
//     disable: process.env.NODE_ENV === "development"
// });

module.exports = [{
  entry: ['./assets/pre/css/index.scss'],
  output: {
    filename: './assets/style-bundle.js', // no useful
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: './assets/css/bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader',
          options: {  includePaths: ['./node_modules'] }
        },
      ]
    }]
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
    new webpack.ProvidePlugin({
        'window.jQuery'    : 'jquery',
        'window.$'         : 'jquery',
        'jQuery'           : 'jquery',
        '$'                : 'jquery'
    }),
    new ExtractTextPlugin("bundle.min.css"),
  ],
  devtool: 'source-map'
}];

module.exports.push({
  entry: ["./assets/pre/js/main.js"],
  output: {
    filename: "./assets/js/bundle.js"
  },
  devtool:'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
});
