const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
    },
    extensions: [".js", ".json", ".vue"]
  },
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [{
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: {
            prettierConfig: {
              parser: "babylon" //The default prettier parser (we might want 'flow' in future)
            }
          }
        }],
        enforce: 'pre',
      },
      {
        test: /\.(ico|jpg|jpeg|gif|webp)(\?.*)?$/,
        loader: "file-loader",
        query: {
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
