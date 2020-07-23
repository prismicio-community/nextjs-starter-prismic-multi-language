const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  cssModules: true,
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})