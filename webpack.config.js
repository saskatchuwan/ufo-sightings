const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname)
  }, 
  module: { 
    rules: [ 
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }, 
  plugins: [HtmlWebpackPluginConfig],
  resolve: {
    extensions: ['.js', '*']
  },
  mode: "development",
};