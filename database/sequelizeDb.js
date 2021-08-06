const { Sequelize } = require('sequelize')

const sequelizeInstance = new Sequelize({
  dialect: 'sqlite',
  storage: `./database.sqlite`
})

sequelizeInstance.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', e))

module.exports = sequelizeInstance;