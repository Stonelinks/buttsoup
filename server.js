var express = require('express'),
  backboneio = require('backbone.io');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/app.html');
});

var port = process.env.PORT || 5000;
var server = app.listen(port);
console.log('listening on port ' + port);

var users = backboneio.createBackend();
var messages = backboneio.createBackend();

users.use(backboneio.middleware.memoryStore());
messages.use(backboneio.middleware.memoryStore());

var io = backboneio.listen(server, {
  users: users,
  messages: messages
});

io.configure(function() {
  io.set('transports', ['xhr-polling']);
  io.set('polling duration', 20);
});
