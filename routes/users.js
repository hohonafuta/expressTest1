var express = require('express');

const { sound } = require('./sound_htm'); // 설정한 변수를 사용하고자 할때 { } 로 감싸서 require  해야 한다. 
var router = express.Router();

//var sound = require('./sound');

/* GET users listing. */
/* //원래 코드
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */



router.get('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  
  // const resv = req.params
  // console.log('requiest id : ' + resv.id);
  console.log( req.params); //http://127.0.0.1:3000/users/sound  입력시  {id: 'sound'}
  const { id } = req.params // 위에 처럼 써도 되고 이 방법으로 써도 된다.
  console.log('requiest id : ' + id);

  
  if ( id == "sound_html" ){
    console.log(" Request value 1: sound ");
    sound(req,res,id);
  } else if ( id == "sound" ){
    //router.get('/sound', function(req, res, next) {
      res.render('sound_ejs', { title: ' Sound Express Node.js Test' });
    //});
  } else if ( id == "NewAccount" ){
      res.render('NewAccount/NewAccount', { title: ' NewAccount.js Test' });
      console.log("NewAccount In ");
  }
  else {
    console.log(" Request value etc :  " + id );
  }

});

module.exports = router;
