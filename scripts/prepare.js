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

async function prepare() {
  await exec('husky', ['install'])
  for (const preset of presets) {
    const file = '.husky/' + preset.hook
    if (!fs.existsSync(file)) {
      await exec('husky', ['add', file, preset.command])
    }
  }
}

if (require.main === module) {
  prepare()
}
