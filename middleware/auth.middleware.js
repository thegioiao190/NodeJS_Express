var db = require("../db");

module.exports.requireAuth = (req,res,next)=>{
	var account = db.db.users.find((obj)=>{return obj.id === req.signedCookies.userID});
	if(!account){
		res.redirect("/auth/login");
	}
	res.locals.acc = account;
	next();
}