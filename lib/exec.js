const execa = require('execa')

function log(command, argv) {
  const regexp = /\.config\.js$/g
  const args = argv.map(arg => {
    return regexp.test(arg) ? '<config>' : arg
  })
  console.log(`> ${command} ${args.join(' ')}\n`)
}

function exec(command, argv) {
  log(command, argv)
  const childProcess = execa(command, argv, {
    stdio: 'inherit'
  })
  childProcess.catch(err => {
    process.exit(err.exitCode)
  })
  return childProcess
}

module.exports = {
  exec
}
