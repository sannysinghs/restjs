var express = require("express") ,
app = express(),
bodyParser = require("body-parser"),
port = process.env.PORT || 3000;

require("./config.js")(express,app,bodyParser);
require("./routes/task_routes.js")(app);
// person = require("./b.js");

 // console.log( routes );

app.listen(port);

console.log("Check your app at port number : htpp://localhost:" + port);
