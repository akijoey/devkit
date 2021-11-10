const fs = require('fs')
const argv = process.argv

const presets = [
  {
    hook: 'pre-commit',
    command: 'npx --no-install lint-staged'
  },
  {
    hook: 'commit-msg',
    command: 'npx --no-install commitlint --edit $1'
  }
]

function hook() {
  if (argv.length === 2) {
    argv.push('install')
  }
  const args = argv.slice(2).join(' ')
  console.log(`> husky ${args}\n`)
  require('husky/lib/bin')
  if (argv[2] === 'install') {
    presets.forEach(preset => {
      const file = '.husky/' + preset.hook
      if (!fs.existsSync(file)) {
        const husky = require('husky/lib')
        console.log(`\n> husky add ${file} '${preset.command}'\n`)
        husky.add(file, preset.command)
      }
    })
  }
}

if (require.main === module) {
  hook()
}
