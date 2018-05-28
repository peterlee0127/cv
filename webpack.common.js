const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
   filename: './assets/css/bundle.css' // scss轉css後另存的目標檔名
});

module.exports = [{
  entry: ['./assets/pre/css/index.scss'],
  output: {
    filename: './assets/style-bundle.js', // no useful
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
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
            use: [
                "css-loader",
                "sass-loader"
            ]
        }
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
         // Options similar to the same options in webpackOptions.output
         // both options are optional
         filename: "[name].css",
         chunkFilename: "[id].css"
     }),
     extractPlugin
  ],
}];


let jsConfig = {
  entry: ["./assets/pre/js/index.js"],
  output: {
    filename: "./assets/js/bundle.js"
  },
  module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            },
            exclude: [nodeModulesPath],
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
     new webpack.ProvidePlugin({
         'window.jQuery'    : 'jquery',
         'window.$'         : 'jquery',
         'jQuery'           : 'jquery',
         '$'                : 'jquery'
     })
  ]
};
// module.exports.push(jsConfig);
