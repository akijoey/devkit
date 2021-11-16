const path = require('path')

const { cosmiconfigSync } = require('cosmiconfig')

function resolve(name) {
  const config = `../config/${name}.config.js`
  return path.resolve(__dirname, config)
}

function explor(name) {
  const explorer = cosmiconfigSync(name)
  const result = explorer.search()
  if (result) {
    return result.config
  }
}

module.exports = {
  resolve,
  explor
}
