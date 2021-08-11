var md5 = require("md5");
var db = require("../db");

module.exports.checkAccout = function(req,res,next){
	var account = req.body;
	var err="";
	var info = db.db.find((obj)=>{return obj.mail===account.mail});
	  if(!info){
	    err="Account does not exits";
	  }else if(info.pass !== md5(account.pass)){
	    err="Wrong Password";
	  }
	  if(err.length){
	    res.render('auth',{err:err,mail:account.mail})
	    return;//de thoat ra tu day
	  }
	  res.cookie("userID",info.id)//set cookie
	  next();
}