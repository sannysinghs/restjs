
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/images');

var TaskSchema = new mongoose.Schema({
	title : String,
	desc : String,
	file : String,
	date : Date
});


var db = mongoose.model("images",TaskSchema);


exports.findAll = function(callback){

	db.find({},function(err,result){
		if(err){
			callback(null);
		}else{
			callback(result);
		}
	});
},

exports.find = function(id,callback){
	db.findOne({"_id" : id },{},function(err,task){
		if(err){
			callback(null);
		}else{
			callback(task);
		}
	});
},

exports.save = function(task,callback){

	var newtask = new db({
		title : task.title,
		desc : task.desc,
		file : task.file,
		date : new Date()
	});

	newtask.save(function(err){
		if(err){
			callback(err);
		}else{
			callback(true);
		}
	});

},

exports.remove = function(id,callback){

	db.findById(id,function(err,result){
		if (err) {
			callback(false);
		}else{
			db.remove(result,function(err,result){
				callback(true);
			});
		}
	});
},

exports.update = function(id,task,callback){
	db.findById(id,function(err,result){
		if (err) {
			callback(false);
		}else{
			result.title = task.title;
			result.desc = task.desc;
			result.file = task.file;
			result.save(function(err,result){
				if (err) {
					callback(false);
				}else{
					callback(true);
				}
			});
		}
	});
}


