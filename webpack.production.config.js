const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './js/index.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'PORT': 8080
      }
    })
  ],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

