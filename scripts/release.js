const { exec } = require('../lib/exec')
const { explor } = require('../lib/config')

const argv = process.argv

function release() {
  if (!explor('release')) {
    argv.push('-e', '@akijoey/semantic-release-config')
  }
  if (!process.env.CI) {
    argv.push('--no-ci')
  }
  exec('semantic-release', argv.slice(2))
}

if (require.main === module) {
  release()
}
