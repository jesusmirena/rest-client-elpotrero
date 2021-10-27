const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        exclude: /\.(s?(a?|c)ss|js|html)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
});
