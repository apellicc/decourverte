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
var express = require('express');
var app = express();
var path = require('path');

app.use('/JavaScript', express.static(path.resolve(__dirname + '/../front/JavaScript')));
app.use('/lib', express.static(path.resolve(__dirname + '/../front/lib')));
app.get('/', function (req, res) {
res.sendfile(path.resolve(__dirname + '/../front/index.html'));
});
app.listen(3000);
