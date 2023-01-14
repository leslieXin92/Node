const { promisify } = require('util')

const download = promisify(require('download-git-repo'))
const open = require('open')

const repoConfig = require('../../config/repoConfig')
const { commandSpawn } = require('../../utils/terminal')

const createCommandActions = async (projectName, others) => {
  // 1、clone project
  await download(repoConfig.vueRepo, projectName, { clone: true })
  // 2、npm install
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${projectName}` })
  // 3、npm run serve
  commandSpawn(command, ['run', 'serve'], { cwd: `./${projectName}` }).then(() => {
    // 4、open in browser
    open('http://localhost:8080/')
  })
}

module.exports = {
  createCommandActions
}
