const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const webpack = require("webpack");

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    pathinfo: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            // publicPath:"dist/images/",
            outputPath: "images",
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            // publicPath:"dist/fonts/",
            outputPath: "fonts",
            name: "[name].[ext]",
          },
        },
      },
      // {
      //   test: /\.html$/i,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: {
      //         publicPath: "./dist",
      //         // name: "[name].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: "index.html",
      title: "agrinweb",
      template: "index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    index: "index.html",
    // writeToDisk: true,
    open: true,
    port: 9000,
    // hot: true,
  },
};
