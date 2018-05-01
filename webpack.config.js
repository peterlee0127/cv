module.exports = [{
  entry: './assets/pre/css/main.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: './assets/style-bundle.js',
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
          options: {  includePaths: ['./node_modules']}
        },
      ]
    }]
  },
}];

module.exports.push({
  entry: "./assets/pre/js/main.js",
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
