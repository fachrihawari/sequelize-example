const { DataTypes } = require("sequelize");
const DB = require("../database");
const Category = require("./category");

const Product = DB.instance.define('Product', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.INTEGER,
  categoryId: DataTypes.INTEGER,
  stock: DataTypes.INTEGER
}, {
  underscored: true
})

Product.belongsTo(Category)

module.exports = Product