const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = env => {
  return {
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.tsc?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ]
        },
        // {
        //   test: /\.css$/,
        //   use: ['style-loader', 'css-loader'],
        // }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsc', '.js', '.vue', '.json'],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'vue-admin'
      }),
    ]
  }
}