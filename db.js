var dbFile = "db.json";
var fs = require("fs");
var data = fs.readFileSync(dbFile,{encoding:'utf8'});



function DB(){
	this.db = JSON.parse(data);
}


DB.prototype.write = function(){
	fs.writeFileSync(dbFile, JSON.stringify(this.db));
}



module.exports = DB;