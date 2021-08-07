var shortid = require("shortid");
var fs = require("fs");

var db = require("../db");
var DB = new db();

module.exports.index = (req, res) => {
  console.log(DB.db);
  res.render('user',{user:DB.db});
};

module.exports.search = (req, res) => {
  var q = req.query.q;
  var userListQuery = DB.db.filter(function(x){
    return x.name.toLowerCase().indexOf(q) >= 0;
  });
  res.render('user',{user:userListQuery});
};

module.exports.create = (req,res)=>{
  res.render("post");
};

module.exports.postCreate = function (req, res, next) {
  var obj = req.body;
  obj.id=shortid.generate();
  DB.db.push(obj);
  DB.write();
  res.redirect("/users");
};