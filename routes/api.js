var express = require('express');
var sumonsRouter = require('./summons');
var router = express.Router();

router.use('/summons', sumonsRouter);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;