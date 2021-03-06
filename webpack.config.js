const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

module.exports = {
  
  entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                  },
                ],
              },
              {
                test: /\.css/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                  },
                  'css-loader',
                ],
              },
              {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                  'file-loader',
                ],
              },
        ]
    },
    devServer: {
      historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/style.css',
          }),
    ]
}