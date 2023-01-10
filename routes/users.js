var express = require('express');

const { sound } = require('./sound'); // 설정한 변수를 사용하고자 할때 { } 로 감싸서 require  해야 한다. 
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
  
  if ( id == "sound" ){
    console.log(" Request value : sound ");
    sound(res,id);
  } else {
    console.log(" Request value :  " + id );
  }

});

module.exports = router;
