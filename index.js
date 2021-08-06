const express = require('express')
const port = 3000

const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
  // storage:
// })

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`App started on port: ${port}`);
})

