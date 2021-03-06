const webpack = require("webpack");
const path = require("path")

const plugins = [];
if (process.env.NODE_ENV !== "production") {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  resolve: {
    alias: {
      '@fundbox/ui/es': path.join(__dirname, '../src/'),
      "vue$": "vue/dist/vue.esm.js",
    },
    extensions: [".js", ".json", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [{
          loader: require.resolve("@storybook/addon-storysource/loader"),
          options: {
            prettierConfig: {
              parser: "babel" //The default prettier parser (we might want "flow" in future)
            }
          }
        }],
        enforce: "pre",
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "resolve-url-loader"
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "resolve-url-loader",
          "sass-loader?sourceMap",
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|gif|webp)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "assets/[name].[hash:8].[ext]",
        },

      },
      {
        test: /\.(png|svg|woff|woff2|eot|ttf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1024,
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  plugins,
};
