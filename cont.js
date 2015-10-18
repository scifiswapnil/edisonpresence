var express = require("express");
var app = express();
app.set('view engine', 'ejs');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var Galileo = require('galileo-io');
var board = new Galileo();

app.get('/', function(request, response) {
	response.render('action', {
		title: 'Action',
		message: 'TELLIO ISAAC'
	});
});

io.on('connection', function(socket) {
	console.log('user connected');



	socket.on('forstart', function(msg) {
		board.digitalWrite(13,1),
		board.digitalWrite(4,1),
		board.analogWrite(3,150),

		board.digitalWrite(10,0),
		board.digitalWrite(8,1),
		board.analogWrite(9,150);

		
		
	});


	socket.on('forstop', function(msg) {
		board.digitalWrite(13,0),
		board.digitalWrite(4,0),
		board.analogWrite(3,0),

		board.digitalWrite(10,0),
		board.digitalWrite(8,0),
		board.analogWrite(9,0);

	});


	socket.on('backstart', function(msg) {
		board.digitalWrite(2,1),
		board.digitalWrite(4,0),
		board.analogWrite(3,150),

		board.digitalWrite(10,1),
		board.digitalWrite(8,0),
		board.analogWrite(9,150);

		
		
	});


	socket.on('backstop', function(msg) {
		board.digitalWrite(2,0),
		board.digitalWrite(4,0),
		board.analogWrite(3,0),

		board.digitalWrite(10,0),
		board.digitalWrite(8,0),
		board.analogWrite(9,0);

	});


	socket.on('leftstart', function(msg) {
		board.digitalWrite(2,1),
		board.digitalWrite(4,0),
		board.analogWrite(3,150),

		board.digitalWrite(10,0),
		board.digitalWrite(8,1),
		board.analogWrite(9,150);

		
		
	});


	socket.on('leftstop', function(msg) {
		board.digitalWrite(2,0),
		board.digitalWrite(4,0),
		board.analogWrite(3,0),

		board.digitalWrite(10,0),
		board.digitalWrite(8,0),
		board.analogWrite(9,0);

	});


	socket.on('rightstart', function(msg) {
		board.digitalWrite(2,0),
		board.digitalWrite(4,1),
		board.analogWrite(3,150),

		board.digitalWrite(10,1),
		board.digitalWrite(8,0),
		board.analogWrite(9,150);

		
		
	});


	socket.on('rightstop', function(msg) {
		board.digitalWrite(2,0),
		board.digitalWrite(4,0),
		board.analogWrite(3,0),

		board.digitalWrite(10,0),
		board.digitalWrite(8,0),
		board.analogWrite(9,0);

	});



	

});



server.listen(8020);
console.log("Server listening!");