const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


var users = [ {id:1,  name:"Pham Doan Hong Minh"},
              {id:2,  name:"Tran Phuong Nhung"},
              {id:3,  name:"Tran Phuong Quyen"},
              {id:4,  name:"Pham Doan Nga"},
              {id:5,  name:"Doan Thi Than"},
              {id:6,  name:"Huynh Minh Khang"}]

app.get('/', (req, res) => {
  res.render('index',{name:"Coder"});
});

app.get('/users', (req, res) => {
  res.render('user',{user:users});
});

app.get('/users/search', (req, res) => {
  var q = req.query.q;
  var userListQuery = users.filter(function(x){
    return x.name.toLowerCase().indexOf(q) >= 0;
  });
  console.log(q);
  res.render('user',{user:userListQuery});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});