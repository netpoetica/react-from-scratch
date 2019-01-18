const path = require("path");
const webpack = require("webpack");

module.exports = {
  // https://webpack.js.org/configuration/entry-context/#entry
  entry: "./src/index.js",
  // https://webpack.js.org/concepts/mode/
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: "development",
  // https://webpack.js.org/configuration/devtoole
  devtool: 'sourcemap',
  module: {
    // https://webpack.js.org/configuration/module/#module-rules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        /*

        We do this already in .babelrc:

        options: {
            presets: [
                "@babel/env",
                "@babel/react"
            ]
        }
        */
      },
      {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader"
        ]
      }
    ]
  },
  resolve: {
      // https://webpack.js.org/configuration/resolve/#resolve-extensions
      extensions: ["*", ".js", ".jsx"]
  },
  output: {
    // https://webpack.js.org/configuration/output/#output-path
    path: path.resolve(__dirname, "dist/"),
    // https://webpack.js.org/configuration/output/#output-publicpath
    publicPath: "/dist/",
    // https://webpack.js.org/configuration/output/#output-filename
    filename: "bundle.js"
  },
  // https://webpack.js.org/configuration/dev-server/#devserver
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  }
};
