const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin')

const getTypePath = (elementType) => elementType ? `/${elementType}` : ''

const getNamePath = (elementName) => elementName ? `/${elementName}` : ''

const getEntryPath = (elementName, elementType) =>
  `./src${getTypePath(elementType)}${getNamePath(elementName)}/index.js`

const getOutputPath = (outputDirectory, elementType) => `${outputDirectory}${getTypePath(elementType)}`

const getOutputFilename = (elementName = 'index') => `${elementName}.js`

module.exports = (elementName, elementType = '', outputDirectory = 'dist') => ({
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  entry: {
    '@fundbox/ui': path.join(process.cwd(), getEntryPath(elementName, elementType))
  },
  externals: {
    'bootstrap-vue': 'bootstrap-vue',
    lodash: 'lodash',
    'sanitize-html': 'sanitize-html',
    'v-mask': 'v-mask',
    'vee-validate': 'vee-validate',
    vue: 'vue'
  },
  output: {
    filename: getOutputFilename(elementName),
    libraryTarget: 'umd',
    path: path.join(process.cwd(), getOutputPath(outputDirectory, elementType)),
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|gif|webp|png|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          mangle: false,
        },
      })
    ]
  }
})
