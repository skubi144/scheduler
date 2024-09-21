const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './src/preload/preload.ts'),
  target: "electron-preload",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.preload.js',
    path: path.resolve(__dirname, '../../', 'dist', 'apps', 'view'),
  },
};
