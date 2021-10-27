const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { HotModuleReplacementPlugin } = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "../dist",
    open: "chrome",
    historyApiFallback: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin()],
});
