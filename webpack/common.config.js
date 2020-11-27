const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ context, port }) => {
  const distDir = path.resolve(context, "dist");
  const assertsDir = path.resolve(context, "assets");
  const publicPath = "/static/";

  return {
    entry: {
      index: ["./src/index.js"],
    },
    output: {
      path: distDir,
      publicPath: "auto",
      pathinfo: true,
      filename: "[name].js",
      chunkFilename: "[name].js",
    },
    devServer: {
      contentBase: distDir,
      //   publicPath,
      port,
      //   proxy: {
      //     "/": `http://localhost:${port}/static/index.html`,
      //   },
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(assertsDir, "index.html"),
      }),
    ],
    optimization: {
      minimize: false,
    },
  };
};
