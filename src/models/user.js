const { DataTypes } = require("sequelize");
const DB = require("../database");

const User = DB.instance.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  underscored: true
})

module.exports = User