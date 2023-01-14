const { createCommandActions } = require('./actions')

const createCommands = (program) => {
  program
    .command('create <projectName> [others...]')
    .description('clone a repository into a folder')
    .action(createCommandActions)
}

module.exports = createCommands
