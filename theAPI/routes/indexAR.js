
var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/indexAC');

router.get('/apicontrollers', controllerIndex.basicApiList);

module.exports = router;
