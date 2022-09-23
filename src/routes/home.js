const express = require('express');
const HomeController = require('../controllers/home');

const router = express.Router();

/* GET home page. */
router.get('/', HomeController.home);

module.exports = router;
