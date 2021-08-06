const express = require('express')
const bodyParser = require('body-parser')
const prepareDB = require('./server/util/prepareDB')
const userRoutes = require('./server/routes/User')
const path = require('path')
const rootDir = require('./server/util/rootDir')

const port = 3000
const app = express()


prepareDB().then(sequelizeDb => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true,
  }))

  app.get('/', async (req, res) => {
    res.sendFile(path.join(rootDir, 'index.html'))
  })

  app.use(userRoutes)

  app.listen(port, () => {
    console.log(`App started on port: ${port}`);
  })

})

