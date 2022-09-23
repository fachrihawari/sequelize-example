const { DataTypes } = require("sequelize");
const DB = require("../database");

const Category = DB.instance.define('Category', {
  name: DataTypes.STRING
}, {
  underscored: true
})

module.exports = Category