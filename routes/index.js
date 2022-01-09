const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user); //iconの情報を取得
  res.render('index', { title: 'Express' , user: req.user });
});

module.exports = router;
