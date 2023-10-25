const path = require("path");
const StatoscopeWebpackPlugin = require("@statoscope/webpack-plugin").default;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  profile: true,
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new StatoscopeWebpackPlugin()],
};
