var express = require("express");
var app = express();
app.use(express.logger());

process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/src'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
 	console.log("Listening on " + port);
});