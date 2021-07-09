
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  mode: 'development',
  entry: path.resolve('./src/index.tsx'),
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
    path: path.resolve('./dist'),
    filename: '[name].[fullhash].js',
    chunkFilename: '[chunkhash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.json'
        }
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      isProd: process.env.NODE_ENV === 'production',
      inject: true,
      filename: 'index.html',
      template: path.resolve('./public/index.html'),
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {},
  }
}

module.exports = config
