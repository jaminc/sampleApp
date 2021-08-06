const express = require('express')
const bodyParser = require('body-parser')
const prepareDB = require('./util/prepareDB')

const port = 3000
const app = express()


prepareDB().then(sequelizeDb => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true,
  }))

  app.get('/', async (req, res) => {
    // res.send('Hello world!')
    const users = await sequelizeDb.models.User.findAll()

    res.json(users)
  })

  app.listen(port, () => {
    console.log(`App started on port: ${port}`);
  })

})

