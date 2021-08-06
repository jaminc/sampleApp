const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/users', async (req, res) => {
  const users = await User.findAll()

  res.json(users)
})

router.get('/user/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.findAll({
    where: { id, }
  })

  res.json(user)
})

module.exports = router;