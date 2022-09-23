const { DataTypes } = require("sequelize");
const DB = require("../database");

const Order = DB.instance.define('Order', {
  userId: DataTypes.INTEGER,
  productId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
  totalPrice: DataTypes.INTEGER,
  isPaid: DataTypes.BOOLEAN,
  orderDate: DataTypes.DATE,
  paidDate: DataTypes.DATE
}, {
  underscored: true
})

module.exports = Order