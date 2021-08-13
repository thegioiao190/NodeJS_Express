require("dotenv").config();
console.log(process.env.SECRECT_VALUE);
var cookieParser = require("cookie-parser");
var express = require('express');
var app = express();
var port = 3000;

var md5 = require("md5");
var bodyParser = require('body-parser')
var multer = require('multer') // v1.0.5
var upload = multer() // for parsing multipart/form-data

var middlewareAuth = require("./middleware/auth.middleware");
var userRoute = require("./route/user.route");
var authRoute = require("./route/auth.route");
var productRoute = require("./route/product.route");
var DB = require("./db");


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser("testStringRandome"));

app.set('view engine', 'pug');
app.set('views', './views');

app.use("/product",middlewareAuth.requireAuth,productRoute);
app.use("/users",middlewareAuth.requireAuth,userRoute);
app.use("/auth",authRoute);

app.get('/', (req, res) => {
  res.render('index',{name:"Coder"});
});

//Baif 7 view user
app.get("/user/:id",middlewareAuth.requireAuth,(req,res)=>{
  var id = req.params.id;
  res.render("viewUser",{name:DB.db.users.find(function(x){return x.id === id}).name});
})


//Baif 11 static file
app.use(express.static("public"));
//từ giờ ta có thể gỏ tên file trong thư muc để truy cập file đó ở bất cứ đâu



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});