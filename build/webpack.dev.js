const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      historyApiFallback: true,
      port: 8319,
    },
  }

  return merge(common(env), dev_config)
} 