const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'client/src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
    }
    ]
  }
};