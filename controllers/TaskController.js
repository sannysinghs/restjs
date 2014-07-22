
	var TaskModel = require("../models/TaskModel.js");

	exports.findAll = function(callback){
		
		TaskModel.findAll(function(result){
			callback(result);
		});
	},

	exports.find = function(id,callback){

		TaskModel.find(id,function(task){
			if ( null == task) {
				throw new Error("can not proceed the request");				 
				callback(task);
			}else{
				callback(task);	
			}
		});
	},

	exports.save = function(task,callback){
	
		TaskModel.save(task,function(result){
			if(!result){
				throw new Error("can not proceed the request");
				callback(result);
			}else{
				callback(true);
			}

		});
	
	},

	exports.update = function(id,task,callback){
		TaskModel.update(id,task,function(result){
			if (!result) {
				throw new Error("Can not proceed the request");
			}
			callback(result);
		});
	},

	exports.remove = function(id,callback){
	   TaskModel.remove(id,function(result){
	   		if (!result) {
	   			throw new Error("Can not proceed");
	   		}
	   		callback(result);
	   });
	}

