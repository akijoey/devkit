const { exec } = require('../lib/exec')
const { resolve } = require('../lib/config')

const argv = process.argv

const targets = {
  script: {
    command: 'eslint',
    argv: ['--ignore-path', '.gitignore', '-c', resolve('eslint'), '.'],
    default: true
  },
  style: {
    command: 'stylelint',
    argv: [
      '-i',
      '.gitignore',
      '--config',
      resolve('stylelint'),
      '--aei',
      '**/*.{css,scss,sass,less,styl}'
    ],
    default: true
  },
  commit: {
    command: 'commitlint',
    argv: ['-g', resolve('commitlint'), '-e', '.git/COMMIT_EDITMSG']
  },
  staged: {
    command: 'lint-staged',
    argv: ['-c', resolve('lint-staged')]
  }
}

function parseTarget() {
  if (Object.keys(targets).includes(argv[2])) {
    return argv.splice(2, 1)[0]
  } else {
    argv.splice(2)
  }
}

function lint(target) {
  exec(target.command, [...target.argv, ...argv.slice(2)])
}

if (require.main === module) {
  const target = parseTarget()
  Object.keys(targets).forEach(async key => {
    if ((!target && targets[key].default) || target === key) {
      await lint(targets[key])
    }
  })
}
