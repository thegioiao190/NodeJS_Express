var db = require("../db");

module.exports.requireAuth = (req,res,next)=>{
	var account = db.db.find((obj)=>{return obj.id === req.cookies.userID});
	if(!account){
		res.redirect("/auth/login");
	}
	next();
}