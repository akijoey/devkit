const fs = require('fs')

const { exec } = require('../lib/exec')

const presets = [
  {
    hook: 'pre-commit',
    command: 'npx devkit lint:staged'
  },
  {
    hook: 'commit-msg',
    command: 'npx devkit lint:commit'
  }
]

async function hook() {
  await exec('husky', ['install'])
  presets.forEach(async preset => {
    const file = '.husky/' + preset.hook
    if (!fs.existsSync(file)) {
      await exec('husky', ['add', file, preset.command])
    }
  })
}

if (require.main === module) {
  hook()
}
