const sequelizeDb = require('../database/sequelizeDb')
const User = require('../models/User')

async function reseedData(sequelizeDb) {
   const test = await User.bulkCreate([
    {
      firstName: 'jim',
      lastName: 'wood',
    },
    {
      firstName: 'hello',
    }
  ])
  .catch(error => console.error('Error seeding data', error))
}

async function prepareDB() {
  await sequelizeDb.sync({ force: true })

  await reseedData(sequelizeDb)

  return sequelizeDb
}

module.exports = prepareDB;