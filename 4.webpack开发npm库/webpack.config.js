const path = require("path");
const NodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "_",
      type: "umd",
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devtool: "source-map",
  // externals: {
  //   lodash: {
  //     commonjs: "lodash",
  //     commonjs2: "lodash",
  //     amd: "lodash",
  //     root: "_",
  //   },
  // },
  externals: [NodeExternals()],
  plugins: [new MiniCssExtractPlugin()],
};
