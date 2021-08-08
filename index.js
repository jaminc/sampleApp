const express = require('express')
const bodyParser = require('body-parser')
const prepareDB = require('./server/util/prepareDB')
const userRoutes = require('./server/routes/User')
const path = require('path')

const port = 3000
// const port = 8080
const app = express()


prepareDB().then(sequelizeDb => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true,
  }))
  app.use(express.static(path.join(__dirname, 'dist')))
  app.use(userRoutes)

  app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
  })

  app.listen(port, () => {
    console.log(`App started on port: ${port}`);
  })
})
