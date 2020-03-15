const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./example/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: "./build"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./example/index.html"
    }),
    // 将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。
    // 例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 <script> 块
    new VueLoaderPlugin()
  ]
}