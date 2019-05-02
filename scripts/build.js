/* eslint no-console: 0 */
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const { lstatSync, readdirSync, copy } = require('fs-extra')
const { join } = require('path')
const webpack = util.promisify(require('webpack'))
const getWebpackConfig = require('./webpack.config.build')
const chalk = require('chalk')

process.env.NODE_ENV = 'production'

const logger = {
  formatMessage(message = '') {
    const requiredLength = 100
    const lengtToAttach = parseInt((requiredLength - message.length - 2) / 2, 10)
    const dashes = Array(lengtToAttach).fill('-').join('')
    return `\n${dashes} ${message} ${dashes}`
  },
  info(message) { console.log(chalk.magenta.bold(this.formatMessage(message))) },
  error(message) { console.log(chalk.red.bold(this.formatMessage(message))) }
}

const execCommand = async (command) => {
  const { stdout, stderr } = await exec(command)
  console.log(stdout)
  if (stderr) {
    process.exit(1)
  }
}

const cleanup = async () => {
  await execCommand('rm -rf es dist')
  logger.info('Removed output directories')
}

const SRC_PATH = 'src'
const availableTypes = ['components', 'directives']

const isDirectory = source => lstatSync(source).isDirectory()

const getDirectories = (source, type, exclude = []) =>
  readdirSync(source)
    .map((name) => ({ name, type, path: join(source, name) }))
    .filter((dir) => isDirectory(dir.path))
    .filter((dir) => !exclude.includes(dir.name))

const handleWebpackOutput = (stats) => {
  console.group()
  console.group()
  console.log(stats.toString({ colors: true }))
  console.groupEnd()
  console.groupEnd()
}

const buildElements = async () => {
  logger.info('Started elements build')
  const builds = availableTypes
    .reduce((dirs, type) => {
      const directories = getDirectories(`${SRC_PATH}/${type}`, type, ['introduction'])
      return [...dirs, ...directories]
    }, [])
    .map((dir) => {
      return webpack(getWebpackConfig(dir.name, dir.type, 'es'))
        .then((stats) => {
          logger.info(`Started ${dir.name} build`)
          return stats
        })
        .then(handleWebpackOutput)
        .then(() => logger.info(`Finished ${dir.name} build`))
    })
  await Promise.all(builds)
  logger.info('Finished elements build')
}

const buildValidations = async () => {
  logger.info('Started validations build')
  const stats = await webpack(getWebpackConfig(undefined, 'validations', 'es'))
  handleWebpackOutput(stats)
  logger.info('Finished validations build')
}

const buildStyles = async () => {
  logger.info('Started Style build')
  await copy(`${SRC_PATH}/styles`, 'es/styles')
  logger.info('Finished Style build')
}

const buildAssets = async () => {
  logger.info('Started Assets build')
  await copy(`${SRC_PATH}/assets`, 'es/assets')
  logger.info('Finished Assets build')
}

const buildLibrary = async () => {
  logger.info('Started main library build')
  const stats = await webpack(getWebpackConfig())
  handleWebpackOutput(stats)
  logger.info('Finished main library build')
};

(async () => {
  logger.info('Started Fbx build')
  console.time('Fbx build')
  await cleanup()
  await buildElements()
  await buildValidations()
  await buildAssets()
  await buildStyles()
  await buildLibrary()
  console.timeEnd('Fbx build')
  logger.info('Finished Fbx build')
})()
