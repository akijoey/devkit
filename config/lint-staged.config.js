const path = require('path')

const { explor } = require('../lib/config')

const config = {
  '*.{js,ts,tsx}': 'devkit lint:script',
  '*.{css,scss,sass,less,styl}': 'devkit lint:style',
  '*': 'devkit format'
}

if (__dirname === path.join(process.cwd(), '/config')) {
  Object.keys(config).forEach(key => {
    config[key] = 'node ./bin/' + config[key]
  })
}

module.exports = explor('lint-staged') || config
