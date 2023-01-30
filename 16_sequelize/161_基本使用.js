const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('cabbage', 'root', '92ZHANGLIXIN', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log('database connect success!')
  })
  .catch((reason) => {
    console.log('database connect failure', reason)
  })
