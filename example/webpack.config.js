var path = require('path');

module.exports = {
  context: __dirname,
  entry: { app: './example.js' },
  output: {
    filename: './example/public/bundle.js',
    publicPath: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.json$/, loader: 'json', exclude: /node_modules/,
      }
    ]
  }
};
