const { exec } = require('../lib/exec')
const { resolve } = require('../lib/config')

function format() {
  exec('prettier', [
    '--ignore-path',
    '.gitignore',
    '--config',
    resolve('prettier'),
    '-u',
    '-w',
    '.',
    '!((**/)?CHANGELOG.md)',
    ...process.argv.slice(2)
  ])
}

if (require.main === module) {
  format()
}
