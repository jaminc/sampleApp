const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const { Sequelize } = require('sequelize')
const app = express()

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: `./database.sqlite`
})

try {
  sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
} catch (e) {
  console.error('Unable to connect to the database:', e);
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true,
}))



app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`App started on port: ${port}`);
})
