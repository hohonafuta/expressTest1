var express = require('express');
var router = express.Router();

router.get('/soundEjsRet', function(req, res, next) {
    res.render('soundEjsRet', { title: ' < RESULT > Sound Express Node.js Test' });
  });
  
module.exports = router;