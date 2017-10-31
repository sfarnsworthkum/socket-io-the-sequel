var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket) {
  console.log('connection!');

  io.sockets.emit('from server', 'HELLO!');

  socket.on('from client', function(data) {
    console.log(data);
  });
});

http.listen(3000, function() {
  console.log('listening on localhost:3000');
});
