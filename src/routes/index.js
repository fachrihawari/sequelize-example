var express = require('express');
var router = express.Router();

router.use(require('./home'))
router.use(require('./orders'))

module.exports = router;
