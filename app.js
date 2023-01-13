var createError = require('http-errors');
var express = require('express');

var cors = require('cors'); //cors 모듈 사용허가 

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var app = express();

app.use(cors()) // cors 사용

// view engine setup
app.set('views', path.join(__dirname, 'views')); //views 파일들 위치 설정
app.set('view engine', 'ejs'); //

// Morgan API 사용 $ npm install morgan  
app.use(logger('dev'));  
// body데이터를 해석하기 위해서 express.json()와 express.urlencoded()로 처리가 필요
app.use(express.json());   
app.use(express.urlencoded({ extended: false }));
//요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어사용
app.use(cookieParser());
// expressjs에서 static file 경로를 설정 
//  Static 파일들은 클라이언트에서 동작하는 자바스크립트나 css, html과 같은 리소스 파일들을 지칭
app.use(express.static(path.join(__dirname, 'public')));

// http://127.0.0.1:3000/
app.use('/', indexRouter); // /로 시작하는 모든 요청에서 indexRouter 미들웨어 실행
// http://127.0.0.1:3000/users

app.use('/users', usersRouter); // /users 로 시작하는 모든 요청에서  usersRouter 미들웨어 실행


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
