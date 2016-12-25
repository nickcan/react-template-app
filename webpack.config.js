var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./main.js"],
  output: {
    path: "./",
    filename: "index.js"
  },
  devServer: {
    inline: true,
    port: 5001,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-0"],
          plugins: [
            "transform-async-to-generator",
            "transform-class-properties",
            "transform-es2015-classes",
            "transform-object-rest-spread"
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css", {
      allChunks: true
    })
  ]
}
