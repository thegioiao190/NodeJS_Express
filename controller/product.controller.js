var db = require("../db");

module.exports.showProduct = function(req,res,next){
	var page = parseInt(req.query.page) || 1
	var itemPerPage = 9
	var begin = (page-1)*itemPerPage;
	var end = page * itemPerPage;

	var DB = db.db.products.slice(begin,end);
	res.render("product",{
							db:DB,
							page:page
						});
}
//Coong thuc
//  n = so tu tu trang
//  x = so item moi trang
// begin = (n-1)*x
// end   = n*x