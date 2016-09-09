module.exports = {
  entry: './js/index.js',
  output: {
    path: './lib',
    filename: 'bundle.js',
    publicPath: 'lib/'
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
