$(function() {
  var socket = io.connect()

  socket.on('connect', function(data) {
    // nickname = prompt('Whats your nickname ?') || 'Annonyous';
    // socket.emit('join', 'anon');
  });

  var $messageBox = $('#message-log');

  socket.on('messages:output', function(color, voice, message) {
    // height = $messageBox[0].scrollHeight;
    $messageBox.prepend('<p class="lead" style="color: ' + color + ';">' + message + '</p>');
    speak(message, voice);
    $messageBox.scrollTop(0);
  });

  var $counterBox = $('.counter');

  socket.on('count', function(data) {
    $counterBox.text(data.number);
  });
  
  var $input = $('#chat-input');

  socket.on('color', function(color) {
    $input.find('input').css('color', color);
  });

  $input.on('submit', function(e) {
    e.preventDefault();
    var $input = $(this).find('input');
    if ($input.val().length > 0) {
      socket.emit('messages:input', $input.val());
    }
    $input.val('');
    return false;
  });
});
