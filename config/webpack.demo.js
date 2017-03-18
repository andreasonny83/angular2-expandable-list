/**
 * angular2-expandable-list
 *
 * Copyright 2017, @andreasonny83, All rights reserved.
 *
 * @author: @andreasonny83 <andreasonny83@gmail.com>
 */

const path = require('path');
const helpers = require('./helpers');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const ROOT = path.resolve(__dirname);

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: {
    'main': helpers.root('demo/app.ts')
  },

  output: {
    path: helpers.root('demo'),
    filename: 'bundle.js',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      helpers.root('node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'demo/tsconfig.json'
            }
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'raw-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')({
                    browsers: ['last 3 versions', '> 2%']
                  })
                ]
              }
            }
          },
        ]
      },

      {
        test: /\.html$/,
        use: [ 'raw-loader' ]
      },
    ]
  },

  plugins: [
    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      helpers.root('demo')
    ),
  ]
}
