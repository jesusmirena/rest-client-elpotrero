const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.tsx",
  },
  plugins: [
    new HtmlWebpackPlugin({
      /*  template: path.join(__dirname, "../public", "index.html"),
      filename: "./index.html",
      favicon: "./public/favicon.ico", */
      title: "Production",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    clean: true,
    /*     publicPath: "/",
     */
  },
  stats: {
    children: true,
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: [/node_modules/, require.resolve("../public/index.html")],
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      // {
      //   test: /\.tsx$/,
      //   include: path.resolve(__dirname, "src"),
      //   loader: "babel-loader",
      // },
      // { test: /\.tsx?$/, loader: "babel-loader" },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
      },

      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /.d.ts$/,
        loader: "ignore-loader",
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(scss|sass|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".tsx", ".ts"],
  },
};
