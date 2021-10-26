const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public", "index.html"),
      filename: "./index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.tsx?$/, loader: "babel-loader" },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".tsx", ".ts"],
  },
};
