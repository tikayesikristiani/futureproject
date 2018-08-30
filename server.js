var http = require('http');

var server = http.createServer(function (req, res) {
	res.end("Hi, Tika Pasti Bisa");
});

server.listen(8000);

console.log("server running on http://localhost:8000");