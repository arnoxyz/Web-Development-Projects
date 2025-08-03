# Webpack-practice project
Basic set-up for the webpack bundler.
## Summary of most basic commands
- init and install webpack, install packages for handling html, css and images
```
npm init -y
npm install --save-dev webpack webpack-cli

npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
```
- load the css file and for example a picture in the js file
```
// src/index.js
import "./styles.css";

import imgTest from "./test.png";
```
- run webpack 
```
npx webpack 
```
- install and use live  server
```
npm install --save-dev webpack-dev-server
npx webpack serve
```
## Complete webpack.config.js file 
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```








