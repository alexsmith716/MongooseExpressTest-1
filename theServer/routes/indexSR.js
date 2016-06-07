
var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/indexSC');

router.get('/', controllerIndex.indexView);

module.exports = router;