var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Node.js Test' });
});

//만약에 index.ejs를 거치지 않고 직접 NewAccount.ejs로 접근하려면 아래추가
/* GET NewAccount home page. */
router.get('/NewAccount', function(req, res, next) {
  res.render('NewAccount/NewAccount', { title: 'NewAccount.js Test' });
});

// GET NewAccount home page 등에서  join 버튼을 누르면 값이
// 들어와야 하기위해 post 방식으로 받는것을 정의한다.
router.post('/NewAccountUpdate', function(req, res, next) {
  
  // post 로 전달되어진 데이터 읽어오기 예제
  let studentID = req.body.studentId;
  let passwd = req.body.pw;
  let address = req.body.address;

  console.log("StudentID : " + studentID);
  console.log("Password  : " + passwd);
  console.log("Address   : " + address);

  // 변수를 MySql에 저장
  // 저장된 결과가 성공적이면 flag 변수에 1은 넣고
  // MySql에 저장 실패하면 flag에 0을 넣음
  let flag = 1;
  let data = []; //이곳 데이터에는 굉장히 복잡한 json 문서이거나 파일이거나 등등..을 보낼수 있다.
  // json 포멧으로 결과를 응답해준다. => [ Response ]
  res.json({
    "data": data,
    "message": "returned",
    "flag": flag
  })

});


module.exports = router;
