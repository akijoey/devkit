const path = require('path')

const { explor } = require('../lib/config')

const config = {
  '*.{js,ts,tsx}': 'yarn devkit lint:script',
  '*.{css,scss,sass,less,styl}': 'yarn devkit lint:style',
  '*': 'yarn devkit format'
}

if (__dirname === path.join(process.cwd(), '/config')) {
  Object.keys(config).forEach(key => {
    config[key] = config[key].replace('yarn ', 'node ./bin/')
  })
}

module.exports = explor('lint-staged') || config
