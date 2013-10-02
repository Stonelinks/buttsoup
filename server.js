var express = require('express'),
    app = express(),
    http = require('http'),
    _ = require('lodash'),
    server = http.createServer(app),
    io = require('socket.io').listen(server),

    colors = require('./colors');
    clients = {};

server.listen(process.env.PORT || 5000);

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/public/index.html');
});

io.configure(function() {
  io.set('transports', ['xhr-polling']);
  io.set('polling duration', 20);
});

var updateCount = function() {
  io.sockets.emit('count', { number: _.size(clients) });
};

var assignColor = function(client) {
  var color = colors[Math.floor(Math.random() * colors.length)];

  client.set('color', color);
  client.emit('color', color);
};

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var assignVoice = function(client) {
  client.set('voice', {
    pitch: getRandomInt(0, 100), // 50,
    speed: getRandomInt(75, 225), // 175,
    wordgap: getRandomInt(0, 30)
  });
};

io.sockets.on('connection', function(client) {
  console.log('Connecting client ' + client.id);

  clients[client.id] = client;
  updateCount();
  assignColor(client);
  assignVoice(client);

  client.on('messages:input', function(data) {
    console.log('Client ' + client.id + ' says: ' + data);
    client.get('color', function(err, color) {
      client.get('voice', function(err, voice) {
        io.sockets.emit('messages:output', color, voice, data);
      });
    });
  });

  client.on('disconnect', function() {
    delete clients[client.id];
    console.log('Client ' + client.id + ' is getting out of here');
    updateCount();
  });

});
