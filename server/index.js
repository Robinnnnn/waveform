var router = require('express').Router();
var path = require('path');

router.get('/', function(req, res, next) {
  var index = path.join(__dirname, '../index.html')
  res.sendFile(index);
});

module.exports = router;