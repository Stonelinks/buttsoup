$(function() {
  var socket = io.connect()

  var $messageBox = $('#message-log');

  socket.on('messages:output', function(color, voice, message) {
    if (message[0] != '<') {
      speak(message, voice);
    }

    $messageBox.prepend('<p class="lead" style="color: ' + color + ';">' + message + '</p>');
    $messageBox.scrollTop(0);
  });

  var $counterBox = $('.counter');

  socket.on('count', function(data) {
    $counterBox.text(data.number);
  });

  var $input = $('#chat-input').find('input');

  var myColor = undefined;
  socket.on('color', function(color) {
    myColor = color;
    $input.css('color', color);
  });

  var mode = 'chat';
  
  var modes = {
    'chat': function(s) { return s; },
    'code': function(s) { return '<script>' + s + '</script>'; },
    'image': function(s) { return '<img src="' + s + '">'; }
  };

  $('#chat-input').on('submit', function(e) {
    e.preventDefault();
    if ($input.val().length > 0) {
      var message = $input.val();

      // change modes
      if (message.split(' ')[1] == 'mode') {
        mode = message.split(' ')[0];
        if (modes[mode] !== undefined) {
          message = 'Warning! ' + myColor + ' has entered ' + mode + ' mode!';
        }
        else {
          mode = 'chat';
        }
        socket.emit('messages:input', message);
      }
      else {
        socket.emit('messages:input', modes[mode](message));
      }
    }
    $input.val('');
    return false;
  });
});
