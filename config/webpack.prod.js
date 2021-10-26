const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
      // { test: /\.tsx?$/, loader: "babel-loader" },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     name: false,
  //   },
  // },
  plugins: [new MiniCssExtractPlugin()],
});
