const { exec } = require('../lib/exec')

async function test() {
  await exec('jest', [
    '.+\\.test\\.js$',
    '--coverage',
    '--passWithNoTests',
    ...process.argv.slice(2)
  ])
  if (process.env.CI) {
    exec('codecov || :')
  }
}

if (require.main === module) {
  test()
}
