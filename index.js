const express = require('express')
const bodyParser = require('body-parser')
const port = 3000

const { Sequelize } = require('sequelize')
const app = express()

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
  // storage:
// })
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

