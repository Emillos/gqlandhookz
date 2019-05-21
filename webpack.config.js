
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: { app: ['babel-polyfill', "./src/index.js"] },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./'),
    publicPath: '/',
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]'
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.less$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    })

  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['./', 'node_modules'],
  }
};