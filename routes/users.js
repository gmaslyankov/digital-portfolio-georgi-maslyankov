const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/another', function(req, res, next) {
  res.send('respond with another resource');
});

module.exports = router;
