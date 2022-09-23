const express = require('express');
const OrdersController = require('../controllers/orders');

const router = express.Router();

/* GET List of orders. */
router.get('/orders', OrdersController.list);

module.exports = router;
