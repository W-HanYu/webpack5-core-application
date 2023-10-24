const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // process.env.NODE_ENV !== "development"
          //   ? "style-loader"
          //   : MiniCssExtractPlugin.loader,
          "style-loader",
          // MiniCssExtractPlugin.loader,
          "css-loader",

          // "style-loader",
          // "css-loader",
          // "less-loader",
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         importLoaders: 1,
      //       },
      //     },
      //     // {
      //     //   loader: "postcss-loader",
      //     //   options: {
      //     //     postcssOptions: {
      //     //       plugins: [require("autoprefixer")],
      //     //     },
      //     //   },
      //     // },
      //     // "postcss-loader",
      //   ],
      // },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
};
