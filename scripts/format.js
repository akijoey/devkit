const argv = process.argv

function format() {
  if (argv.length === 2) {
    argv.push('--ignore-path', '.gitignore', '-w', '.', '!((**/)?CHANGELOG.md)')
  }
  const args = argv.slice(2).join(' ')
  console.log(`> prettier ${args}\n`)
  require('prettier/bin-prettier')
}

if (require.main === module) {
  format()
}
