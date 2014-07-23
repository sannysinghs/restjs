var express = require("express") ,
app = express(),
multer = require("multer"),
port = process.env.PORT || 3000;

require("./config.js")(express,app,multer);
require("./routes/task_routes.js")(app);


app.listen(port);

console.log("Check your app at port number : htpp://localhost:" + port);
