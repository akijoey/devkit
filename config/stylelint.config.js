const { explor } = require('../lib/config')

const config = {
  extends: '@akijoey/stylelint-config'
}

module.exports = explor('stylelint') || config
