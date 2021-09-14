const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/script.ts',
  module: {
    rules:[{
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public'),
  },
};