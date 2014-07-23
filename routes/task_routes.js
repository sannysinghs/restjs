module.exports = function(app){


	var TaskController = require(app.get("controllers")+"/TaskController.js");
	
	
	app.get('/',function(req,res){
		
		res.sendFile("index.html");
	
	});

	app.get("/memos",function(req,res){
			
			try{
				TaskController.findAll(function(result){	
					res.json(result);
				});
			}catch(exception){
				res.send(404);
			}
	});

	app.get("/memos/:id",function(req,res){
		var id = req.params.id;
		try{
			var task = TaskController.find(id,function(result){
				res.json(result);	
			});
			
		}catch(exception){
			res.send(404);
		}
	});

	app.delete("/memos/:id",function(req,res,next){
		var id = req.params.id;
		try{
			TaskController.remove(id,function(result){
				res.send(200);
			});
		}catch(exception){
			res.send(404);
		}
	});

	app.post("/memos",function(req,res,next){
		
		var task = req.body;
		var files = req.files;
		
		try {
			TaskController.save({ 
				title : task.title || "Default Title",
				file : files.image.name,
				desc : task.desc
			},function(result){
				res.send(200);	
			});
		}catch(exception){
			res.send(404);
		}	
		
	});

	app.put("/memos/:id",function(req,res){
		var id = req.params.id;
		var task = req.body;
		task.file = req.files.image.name;
		try{
			TaskController.update(id,task,function(result){
				res.send(200);
			});
		}catch(exception){
			res.send(404);
		}
	});

}

