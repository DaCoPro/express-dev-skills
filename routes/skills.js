var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controller/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create)

module.exports = router;
