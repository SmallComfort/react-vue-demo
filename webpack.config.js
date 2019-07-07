const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    build: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-vue',
      'react-vue-helper',
      'vuex',
      'prop-types'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: 'react-vue-loader',
        options: {
          vue: './vue.config.js'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.vue', '.js']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
