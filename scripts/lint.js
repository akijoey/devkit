const argv = process.argv

const targets = {
  script: {
    command: 'eslint',
    argv: ['--ignore-path', '.gitignore', '.']
  },
  style: {
    command: 'stylelint',
    argv: ['-i', '.gitignore', '**/*.{css,scss,sass,less,styl}', '--aei']
  }
}

let target = null
if (Object.keys(targets).includes(argv[2])) {
  target = argv.splice(2, 1)[0]
}

function lint(type) {
  !target && argv.splice(2)
  if (argv.length === 2) {
    argv.push(...type.argv)
  }
  const args = argv.slice(2).join(' ')
  console.log(`> ${type.command} ${args}\n`)
  require(`${type.command}/bin/${type.command}`)
}

if (require.main === module) {
  Object.keys(targets).forEach(key => {
    if (!target || target === key) {
      lint(targets[key])
    }
  })
}
