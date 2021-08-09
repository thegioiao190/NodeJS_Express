var express = require('express');
var app = express();
var port = 3000;

var userRoute = require("./route/user.route");
var DB = require("./db");

app.set('view engine', 'pug');
app.set('views', './views');

app.use("/users",userRoute);

app.get('/', (req, res) => {
  res.render('index',{name:"Coder"});
});

//Baif 7 view user
app.get("/user/:id",(req,res)=>{
  var id = req.params.id;
  console.log(DB.db);
  res.render("viewUser",{name:DB.db.find(function(x){return x.id === id}).name});
})


//Baif 11 static file
app.use(express.static("public"));
//từ giờ ta có thể gỏ tên file trong thư muc để truy cập file đó ở bất cứ đâu


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});