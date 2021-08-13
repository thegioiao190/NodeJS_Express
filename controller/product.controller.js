var db = require("../db");

module.exports.showProduct = function(req,res,next){
	res.render("product",{db:db.db.products});
}