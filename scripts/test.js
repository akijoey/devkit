const argv = process.argv
const env = process.env

async function test() {
  if (argv.length === 2) {
    argv.push('.+\\.test\\.js$', '--coverage', '--passWithNoTests')
  }
  const args = argv.slice(2).join(' ')
  console.log(`> jest ${args}\n`)
  argv.push('--detectOpenHandles')
  if (env.NODE_ENV == null) {
    env.NODE_ENV = 'test'
  }
  await require('jest-cli').run()
  if (env.CI && argv.includes('--coverage')) {
    argv.splice(2)
    console.log(`\n> codecov\n`)
    require('codecov/bin/codecov')
  }
}

if (require.main === module) {
  test()
}
