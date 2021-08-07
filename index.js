var express = require('express');
var app = express();
var port = 3000;

var userRoute = require("./route/user.route");
var db = require("./db");
var DB= new db();

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});