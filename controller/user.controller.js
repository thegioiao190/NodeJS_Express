var shortid = require("shortid");
var fs = require("fs");

var db = require("../db");

module.exports.index = (req, res) => {
  console.log(db.db);
  res.render('user',{user:db.db});
};

module.exports.search = (req, res) => {
  var q = req.query.q;
  var userListQuery = db.db.filter(function(x){
    return x.name.toLowerCase().indexOf(q.toLowerCase()) >= 0;
  });
  res.render('user',{user:userListQuery});
};

module.exports.create = (req,res)=>{
  res.render("post");
};

module.exports.postCreate = function (req, res, next) {
  var obj = req.body;
  var errors =[];
  if(!obj.name){
    errors.push("The Name Is Required");
  }
  if(!obj.phone){
    errors.push("The Phone Is Required");
  }
  if(errors.length){
    res.render('post',{errors:errors,value:obj})
    return;//de thoat ra tu day
  }

  obj.id=shortid.generate();
  db.db.push(obj);
  db.dbWrite();
  res.redirect("/users");
};
