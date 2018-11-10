const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const UglifyJsPlugin = require("uglifyjs-3-webpack-plugin");

const { NODE_ENV, ELEMENT_NAME, TYPE, OUTPUT_DIRECTORY } = process.env;

const getType = () => TYPE ? `/${TYPE}` : "";
const getEntryPath = () => {
  const element_name = ELEMENT_NAME ? `/${ELEMENT_NAME}` : "";
  return `./src${getType()}${element_name}/index.js`;
}
const getOutputFileName = () => `${ELEMENT_NAME ? ELEMENT_NAME : "index"}.js`
const getOutputPath = () => `${OUTPUT_DIRECTORY}${getType()}`

const config = {
  entry: getEntryPath(),
  filename: getOutputFileName(),
  outputPath: getOutputPath()
}
module.exports = {
  mode: NODE_ENV,
  devtool: 'source-map',
  entry: {
    "fundbox-ui": path.join(process.cwd(), config.entry)
  },
  externals: {
    "bootstrap-vue": "bootstrap-vue",
    "lodash": "lodash",
    "v-mask": "v-mask",
    "vee-validate": "vee-validate",
    "vue": "vue"
  },
  output: {
    filename: config.filename,
    libraryTarget: 'umd',
    // library: 'FbxButton',
    umdNamedDefine: true,
    path: path.join(process.cwd(), config.outputPath),
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|gif|webp|png|svg)(\?.*)?$/,
        loader: "url-loader"
      },
      {
        test: /\.(woff|woff2|eot|ttf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]",
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
};
