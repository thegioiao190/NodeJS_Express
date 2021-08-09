var dbFile = "db.json";
var fs = require("fs");
var data = fs.readFileSync(dbFile,{encoding:'utf8'});

db = JSON.parse(data);

module.exports.dbWrite = function(){
	fs.writeFileSync(dbFile, JSON.stringify(db));
}

module.exports.db = db;