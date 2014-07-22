module.exports = function(app){


	var TaskController = require(app.get("controllers")+"/TaskController.js");
	
	
	app.get('/',function(req,res){
		res.send('testing');
	
	});

	app.get("/tasks",function(req,res){
			
			try{
				TaskController.findAll(function(result){	
					res.json(result);
				});
			}catch(exception){
				res.send(404);
			}
	});

	app.get("/tasks/:id",function(req,res){
		var id = req.params.id;
		try{
			var task = TaskController.find(id,function(result){
				res.json(result);	
			});
			
		}catch(exception){
			res.send(404);
		}
	});

	app.delete("/tasks/:id",function(req,res,next){
		var id = req.params.id;
		try{
			TaskController.remove(id,function(result){
				res.send(200);
			});
		}catch(exception){
			res.send(404);
		}
	});

	app.post("/tasks",function(req,res,next){
		
		var task = req.body;
		
		try {
			TaskController.save({ 
				title : task.title || "Default Title",
				status : task.status || false
			},function(result){
				res.send(200);	
			});
		}catch(exception){
			res.send(404);
		}	
		
	});

	app.put("/tasks/:id",function(req,res){
		var id = req.params.id;
		var task = req.body;
		try{
			TaskController.update(id,task,function(result){
				res.send(200);
			});
		}catch(exception){
			res.send(404);
		}
	});

}

