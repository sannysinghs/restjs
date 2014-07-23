module.exports = function(express,app,multer){
	app.set("view engine","html");
	app.engine("html",require("ejs").renderFile);
	app.set("views",__dirname + "/views");
	app.set("controllers",__dirname+"/controllers");
	app.set("models",__dirname+"/models");
	app.use(express.static(__dirname + "/"));
	app.use(multer({ dest: './uploads/'}));
}
