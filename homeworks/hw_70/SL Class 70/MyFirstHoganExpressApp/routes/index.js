var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('layout', {
    /*title: 'Express',*/
    name: 'Bob',
    partials: { content: 'index' }
  });
});

router.get('/sayHello', function (req, res, next) {
  res.render('layout', {
    /*title: 'Express',*/
    name: req.query.name || 'stranger',
    partials: { content: 'index' }
  });
});

router.param('name', (req, res, next) => {
  req.locals.person = {
    name: req.params.name,
    email: req.params.name + '.emailFromDatabase@gmail.com'
  };
  next();
});

router.get('/sayHello2/:name', function (req, res, next) {
  res.render('layout', {
    /*title: 'Express',*/
    //name: req.params.name || 'stranger',
    name: req.locals.person ? req.locals.person.name : 'stranger',
    email: req.locals.person ? req.locals.person.email : 'no email known',
    partials: { content: 'withemail' }
  });
});

module.exports = router;
