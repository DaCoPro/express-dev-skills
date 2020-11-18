var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controller/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);

module.exports = router;
