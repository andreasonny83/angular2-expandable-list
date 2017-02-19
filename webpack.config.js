const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

const ROOT = path.resolve(__dirname);

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: {
    'main': './demo/app.ts'
  },

  output: {
    path: root('demo'),
    filename: 'bundle.js',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      root('demo'),
      root('src'),
      root('node_modules'),
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
            },
          },
          {
            loader: 'angular2-template-loader'
          }
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },

      {
        test: /\.css?$/,
        use: [
          {
            loader: 'raw-loader'
          },
        ]
      },
    ]
  },

  plugins: [
    new TsConfigPathsPlugin(),

    new ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)src(\\|\/)linker/,
      root('demo')
    ),
  ]
}
