const express = require('express')
const bodyParser = require('body-parser')
const prepareDB = require('./server/util/prepareDB')
const userRoutes = require('./server/routes/User')

const port = 3000
const app = express()


prepareDB().then(sequelizeDb => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true,
  }))

  app.get('/', async (req, res) => {
    res.send('Hello world!')
  })

  app.use(userRoutes)

  app.listen(port, () => {
    console.log(`App started on port: ${port}`);
  })

})

