const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const { Sequelize, DataTypes } = require('sequelize')
const app = express()

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./database.sqlite`
})

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', e))

sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: DataTypes.STRING,
})

sequelize.sync({ force: true })
  .then(() => {
    return sequelize.models.User.bulkCreate([
      {
        firstName: 'jim',
        lastName: 'wood',
      },
      {
        firstName: 'hello',
      }
    ])
  })
  .catch(error => console.error('Error seeding data', error))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))



app.get('/', async (req, res) => {
  // res.send('Hello world!')
  const users = await sequelize.models.User.findAll()

  res.json(users)
})

app.listen(port, () => {
  console.log(`App started on port: ${port}`);
})
