var express = require('express');
var router = express.Router();

var projectsRouter = require('../controller/projects')

/* GET users listing. */
router.get('/', projectsRouter.index);
//router.get('/:id', projectsRouter.show);

module.exports = router;