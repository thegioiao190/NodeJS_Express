 var shortid = require("shortid");
//var fs = require("fs");

var db = require("../db");

module.exports.index = (req, res) => {
  res.render('user',{user:db.db.users});
};

module.exports.search = (req, res) => {
  var q = req.query.q;
  var userListQuery = db.db.users.filter(function(x){
    return x.name.toLowerCase().indexOf(q.toLowerCase()) >= 0;
  });
  res.render('user',{user:userListQuery});
};

module.exports.create = (req,res)=>{
  res.render("post");
};

module.exports.postCreate = function (req, res, next) {
  var obj = req.body;
  obj.id=shortid.generate();
  db.db.users.push(obj);
  db.dbWrite();
  res.redirect("/users");
};

module.exports.sendCookie = function (req,res){
  if (typeof(req.cookies.cookieID) === "undefined"){//check xem da nhan cookie chua, mac dinh cookie neu chua nhan se la object rong {}
    res.cookie("cookieID",shortid.generate());//server send new cookie
    res.send("Cookie received");
  }else
    res.send("You has cookie: "+req.cookies.cookieID)
}  