const { explor } = require('../lib/config')

const config = {
  extends: '@akijoey/commitlint-config'
}

module.exports = explor('commitlint') || config
