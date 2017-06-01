// const http = require('http');
// const EventEmitter = require('events');
// const fs = require('fs');
// const express = require('express');
//
// let App = {
// 	start: function (port) {
// 		let emitter = new EventEmitter;
// 		let serveur = http.createServer((request, response) => {
// 			response.writeHead(200);
// 			if (request.url === '/')
// 				emitter.emit("root", response);
// 			else if (request.url != '/favicon.ico')
// 				emitter.emit("nroot", response);
// 		//	response.end();
// 		}).listen(port);
// 		return (emitter);
// 	}
// }
//
// let app = App.start(3000);
// const pageIndex = "../front/index.html";
// const pageSecond = "../front/secondary.html";
//
// app.on("root", (response) => {
// 	fs.readFile(pageIndex, (err, data) => {
// 		response.end(data);
// });
// 	console.log("ici on va appeler la page home");
// });
// app.on("nroot", (response) => {
// 	fs.readFile(pageSecond, (err, data) => {
// 		response.end(data);
// });
// 	console.log("ici je vais verifier si le header est bon sinon transfert home");
//
// });
// var express = require('express');
// var app = express();
//
// app.use(express.static(__dirname + '/public'));
//
// app.get('/', function(req, res){
//   res.redirect('/index.html');
// });

// app.listen(80);
var express = require('express');
var app = express();
var path = require('path');
var url = require('url');

// app.get('/front/lib/angular.min.js', function (req, res) {
// 	console.log(req.url);
// });

app.use(express.static(path.resolve(__dirname + '/../front')));
app.get('/', function (req, res) {
	console.log(req.url);
	res.sendFile(path.resolve(__dirname + '/../front/index.html'));
});
app.listen(3000);
