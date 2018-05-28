const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {};
let scssConfig = {
  entry:
    {
      // style:"./assets/src/css/index.scss",
    bundle: './assets/src/js/index.js'
  }
  ,
  output: {
    path: path.resolve(__dirname, "./assets/dist"),
    filename: '[name].js',
    // filename: 'bundle.js',
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
              presets: ['es2015']
            },
            exclude: [nodeModulesPath]
        },
        {
            test: /\.s?[ac]ss$/,
            use:
             [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            // [
            //   devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            //   'css-loader',
            //   'sass-loader',
            // ],
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
      // new ExtractTextPlugin({filename: 'bundle.css'})
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
