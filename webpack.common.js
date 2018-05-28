const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {};
let scssConfig = {
  entry: ['./assets/src/js/index.js'],
  output: {
    path: path.resolve(__dirname, "./assets/dist"),
    filename: "bundle.js",
    publicPath: "./assets/dist"
  },
  module: {
      rules: [
        {
            test: /\.s?[ac]ss$/,
            use: [
              devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
        },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015']
                },
                exclude: [nodeModulesPath]
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
    }),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      })
 ]
};
module.exports = scssConfig;

/*
let jsConfig = {
  // entry: ["./assets/pre/js/index.js"],
  // output: {
  //   filename: "./assets/js/bundle.js"
  // },
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
*/