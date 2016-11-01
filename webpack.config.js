module.exports = {
  entry: "./main.js",
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
        loader: "babel"
      }
    ]
  }
}
