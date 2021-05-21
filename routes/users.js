var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/rough', function(req, res, next) {
  res.render('rough', { title: 'Welcome' }); 
}); 

module.exports = router;
