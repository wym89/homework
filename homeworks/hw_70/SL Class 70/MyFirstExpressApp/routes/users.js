var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/bar', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.send('users BAR!');
});

module.exports = router;
