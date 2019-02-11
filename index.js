var express = require('express');
var bodyParser = require('body-parser');

var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/',function(req,res){
	res.sendfile(__dirname+'/home.html');
});

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("App is running on port " + port);
});