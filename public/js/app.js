$(function() {
  var socket = io.connect()

  var $messageBox = $('#message-log');

  socket.on('messages:output', function(color, voice, message) {
    $messageBox.prepend('<p class="lead" style="color: ' + color + ';">' + message + '</p>');
    speak(message, voice);
    $messageBox.scrollTop(0);
  });

  var $counterBox = $('.counter');

  socket.on('count', function(data) {
    $counterBox.text(data.number);
  });
  
  var $input = $('#chat-input').find('input');

  socket.on('color', function(color) {
    $input.css('color', color);
  });

  $('#chat-input').on('submit', function(e) {
    e.preventDefault();
    if ($input.val().length > 0) {
      socket.emit('messages:input', $input.val());
    }
    $input.val('');
    return false;
  });
});
