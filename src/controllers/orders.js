const Order = require('../models/order')

const OrdersController = {
  async list(req, res) {
    res.status(200).json({
      info: "List of orders",
      result: await Order.findAll()
    })
  }
}

module.exports = OrdersController