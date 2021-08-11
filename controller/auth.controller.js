var db = require("../db");


module.exports.login = function(req,res){
	res.render("auth");
}

module.exports.loginMethod = function(req,res){
	
	res.redirect("/");
}