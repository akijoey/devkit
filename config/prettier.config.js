const { explor } = require('../lib/config')

const config = '@akijoey/prettier-config'

module.exports = explor('prettier') || config
