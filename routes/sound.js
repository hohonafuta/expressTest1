var express = require('express');
var router = express.Router();

router.get('/sound', function(req, res, next) {
    res.render('sound_ejs', { title: ' Sound Express Node.js Test' });
  });
  
module.exports = router;
  