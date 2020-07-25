const path = require('path')
const withStyles = require('@webdeb/next-styles')

module.exports = withStyles({
  sass: true, 
  modules: true,
  webpack(config) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})