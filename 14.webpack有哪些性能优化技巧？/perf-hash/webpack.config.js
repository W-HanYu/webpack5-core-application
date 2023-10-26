const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { index: "./src/index.js", foo: "./src/foo.js" },
  mode: "development",
  devtool: false,
  output: {
    filename: "[name]-[contenthash:7].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: "[name]-[contenthash:7].css" })],
};
