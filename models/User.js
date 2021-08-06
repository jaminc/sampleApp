const sequelize = require('../database/sequelizeDb')
const { DataTypes } = require('sequelize')

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: DataTypes.STRING,
})

module.exports = User;