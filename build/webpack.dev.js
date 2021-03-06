const webpack = require('webpack')
const merge = require('webpack-merge')
const { resolve, styleLoader, getIPAdress } = require('./utils.js')
const baseConfig = require('./webpack.base.js')
const HtmlPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'

const webpackConfig = merge(baseConfig, {
  mode: 'development',
  entry: resolve('example/main.js'),
  devtool: '#cheap-module-eval-source-map',

  module: {
    rules: styleLoader()
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlPlugin({
      template: resolve('example/index.html'),
      filename: 'index.html'
    })
  ],

  devServer: {
    contentBase: resolve('dev'),
    host: getIPAdress(),
    port: 6001,
    open: true,
    hot: true
  }
})

module.exports = webpackConfig
