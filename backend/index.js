var express = require('express');
var app = express();
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
// app.get('/front/lib/angular.min.js', function (req, res) {
// 	console.log(req.url);
// });

app.use(express.static(path.resolve(__dirname + '/../front')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname + '/../front/index.html'));
});
app.post('/checkVal', function (req, res) {
	console.log("ej");
	console.log(req.body);

	return res.sendStatus(200);
});
app.listen(3000);
