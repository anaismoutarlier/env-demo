var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { img: process.env.IMG_URL, node_env: process.env.NODE_ENV });
});

module.exports = router;
