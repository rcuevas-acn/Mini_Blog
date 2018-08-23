const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|sass|css)$/i,
        include: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [htmlPlugin]
};
