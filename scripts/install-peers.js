const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const npm = require('npm')

function objectHasAnyKeys(object) {
  return object && Object.keys(object).length > 0
}

fs.readFile(path.resolve(__dirname, '../package.json'), 'utf-8', (__error, packageJsonString) => {
  const packageJson = JSON.parse(packageJsonString)
  const peerDependencies = packageJson.peerDependencies

  if (!objectHasAnyKeys(peerDependencies)) {
    return chalk.bold.red('No peer dependencies exist in package.json')
  }

  const args = Object.entries(peerDependencies).map(dep => {
    const [name, version] = dep
    return `${name}@${version}`
  })

  // don't save. only install.
  npm.load({ save: false }, () => npm.commands.install(args))
})
