var express = require("express");
var router = express.Router();

var bodyParser = require('body-parser')
var multer = require('multer') // v1.0.5
var upload = multer() // for parsing multipart/form-data

var controller = require("../controller/user.controller");
var Validation = require("../Validation/checkBlank");




 router.use(bodyParser.json()) // for parsing application/json
 router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/', controller.index);

router.get('/search', controller.search);


//Bài 4////////////////////////////////POST Method
router.get("/create",controller.create);



router.post('/create', upload.array(),Validation.ckBlankUser , controller.postCreate);


//Bai 5 ////////////////////////////NodeMon
//npm install --save-dev nodemon
//them "start":"nodemon index.js"
//Bài 6 - Tích hợp database (lowdb)V2///////////////////////
// khong caif dc lowdb nen da dung fs thay the


// var fs = require("fs");
// var data = fs.readFileSync('db.json',{encoding:'utf8'});

// var user = JSON.parse(data);




//Bai13 Cookie
//De cai module doc cookie
//npm install cookie-parse --save
router.get("/getTestCookie",controller.sendCookie);


module.exports = router;