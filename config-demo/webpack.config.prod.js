'use strict';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  output: {
    filename: '[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
        chunks: 'all'
    },
    runtimeChunk: 'single',
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        },
        canPrint: false
      })
    ]
  }
});