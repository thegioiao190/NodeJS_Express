module.exports.ckBlankUser = function(req,res,next){
	var obj = req.body;
	var errors =[];
	  if(!obj.name){
	    errors.push("The Name Is Required");
	  }
	  if(!obj.phone){
	    errors.push("The Phone Is Required");
	  }
	  if(errors.length){
	    res.render('post',{errors:errors,value:obj})
	    return;//de thoat ra tu day
	  }
	  next();
}