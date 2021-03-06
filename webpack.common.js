const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {};
let scssConfig = {
  entry:
    {   bundle: './assets/src/js/index.js'  }
  ,
  output: {
    path: path.resolve(__dirname, "./assets/dist"),
    filename: '[name].js',
    publicPath: "./assets/dist"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
      rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env']
            },
            exclude: [nodeModulesPath]
        },
        {
            test: /\.s?[ac]ss$/,
            use:
             [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
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
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      }),
 ]
};
module.exports = scssConfig;


