import { merge } from 'webpack-merge'
import common from './webpack.common'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
}

export default merge(common, prodConfig)
