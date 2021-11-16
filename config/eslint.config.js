const { explor } = require('../lib/config')

const config = {
  extends: '@akijoey'
}

module.exports = explor('eslint') || config
