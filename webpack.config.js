var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client',
    "./client/index.jsx",
  ],
  output: {
      path: __dirname + "/assets",
      filename: "bundle.js",
      publicPath: "/assets"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel-loader']
      }
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  }
}
