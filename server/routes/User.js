const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../models/User')

router.get('/users', async (req, res) => {
  const users = await User.findAll()

  res.json(users)
})

router.get('/users/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findAll({
    where: { id, }
  })

  res.json(user)
})

router.get('/new/users', async (req, res) => {
  res.sendFile(path.join(__dirname, '../views/users/new-users.html'))
})

router.post('/users', async (req, res) => {
  const user = await User.create(req.body, { fields: ['firstName', 'lastName'] })
    .catch((err) => console.error('Error creating user:', err))

  if (user) {
    res.json(user)
  } else {
    res.json('iosadfodsoij')
  }
})

module.exports = router;