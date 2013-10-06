/*
 * buttsoup V0.0.2
 * text to speech + chat = fun
 * http://buttsoup.herokuapp.com/
 *
 * Built on 2013-10-06
 *
 * MIT
 * Copyright 2013, Lucas Doyle
 *
 */

$(function(){
'use strict';

window.getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.pickRandom = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

window.print = function(s) {
  console.log(s);
};

window.redirect = function(address) {
  window.location.href = address;
};

window.reload = function() {
  window.location.reload(true);
};

window.isJSON = function(text) {
  if (text === undefined) {
    return false;
  }
  else {
    return /^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''));
  }
};

window.setLocalSetting = function(attr, _default) {
  window.localStorage.setItem(attr, _default);
};

window.getLocalSetting = function(attr, _default) {
  try {
    if (window.localStorage.hasOwnProperty(attr)) {
      var val = window.localStorage.getItem(attr);
      if (window.isJSON(val)) {
        return JSON.parse(val);
      }
      else {
        return val;
      }
    }
    else {
      window.setLocalSetting(attr, _default);
      return _default;
    }
  }
  catch (err) {
    print('Warning: something nasty happened with local setting ' + attr);
    print('         oh well returning default setting ' + _default);
    print(err);
    return _default;
  }
};

//
//
  // var htmlEntities = function(str) {
    // return String(str)
      // .replace(/&/g, '&amp;')
      // .replace(/</g, '&lt;')
      // .replace(/>/g, '&gt;')
      // .replace(/"/g, '&quot;');
  // };
//
  // var socket = io.connect();
  // var $messageBox = $('#message-log');
//
  // socket.on('messages:output', function(color, voice, message) {
    // var begin = '<p class="lead" style="color: ' + color + ';"><b>' + color + '</b>: ';
    // var end = '</p>';
    // if (message[0] != '<') {
      // speak(message, voice);
      // $messageBox.prepend(begin + message + end);
    // }
    // else {
      // $messageBox.prepend(message);
      // $messageBox.prepend(begin + '<code>' + htmlEntities(message) + '</code>' + end);
    // }
    // $messageBox.scrollTop(0);
  // });
//
  // var $counterBox = $('.counter');
//
  // socket.on('count', function(data) {
    // $counterBox.text(data.number);
  // });
//
  // var $input = $('#chat-input').find('input');
//
  // var myColor = undefined;
  // socket.on('color', function(color) {
    // myColor = color;
    // $input.css('color', color);
  // });
//
  // var mode = 'chat';
//
  // var makeImage = function(s) { return '<img src="' + s + '">'; };
//
  // var modes = {
//
    // 'chat': function(s) {
      // return s;
    // },
//
    // 'code': function(s) {
      // return '<script>try{' + s + '}catch(e){}</script>';
    // },
//
    // 'css': function(s) {
      // return '<style type="text/css">' + s + '</style>';
    // },
//
    // 'image': makeImage,
//
    // 'butt': function(s) {
      // return makeImage('http://discoverygc.com/wiki/images/thumb/3/34/Doge_%281%29.jpg/264px-Doge_%281%29.jpg');
    // },
//
    // 'cage': function(s) {
      // return makeImage(pickRandom([
//
        // this list lifted from the nCage chrome extension
        // 'http://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nicolas_Cage_2011_CC.jpg/220px-Nicolas_Cage_2011_CC.jpg',
        // 'http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg/220px-Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_(Mostra).jpg',
        // 'http://content8.flixster.com/rtactor/40/33/40334_pro.jpg',
        // 'http://images.fandango.com/r88.0/ImageRenderer/200/295/images/performer_no_image_large.jpg/0/images/masterrepository/performer%20images/p10155/kickass-pm-4.jpg',
        // 'http://topnews.in/files/Nicolas-Cage_0.jpg',
        // 'http://i0.kym-cdn.com/entries/icons/original/000/006/993/1817.jpg',
        // 'http://images.trulia.com/blogimg/9/d/7/d/1775659_1302741896636_o.jpg',
        // 'http://cache2.artprintimages.com/LRG/10/1062/Y4UL000Z.jpg',
        // 'http://fitnessgurunyc.com/wp/wp-content/uploads/2011/03/5c4fc_nicolas_cage_01.jpeg',
        // 'http://www3.pictures.fp.zimbio.com/Nicholas+Cage+David+Letterman+-EtX2RCI91al.jpg',
        // 'http://www.topnewmovieslist.com/wp-content/uploads/2012/05/Nicolas-Cage-Movies.jpg',
        // 'http://resources2.news.com.au/images/2009/11/04/1225794/400950-nicolas-cage.jpg',
        // 'http://www.topnews.in/uploads/Nicolas-Cage1.jpg',
        // 'http://d2tq98mqfjyz2l.cloudfront.net/image_cache/1335739369248357_animate.gif',
        // 'http://thetrustadvisor.com/wp-content/uploads/2013/03/nicolas-cage.jpg',
        // 'http://starsmedia.ign.com/stars/image/article/908/908074/nicolas-cage-20080905025038648-000.jpg',
        // 'http://images.latinospost.com/data/images/full/10956/nicolas-cage.jpg?w=600',
        // 'http://wpc.556e.edgecastcdn.net/80556E/img.news/NEPYPT3WQzBeUP_1_1.jpg',
        // 'http://www.iwatchstuff.com/2012/11/30/nic-cage-in-things.jpg',
        // 'http://images.contactmusic.com/newsimages/nicolas_cage_552048.jpg',
        // 'http://www.apnatimepass.com/nicolas-cage-in-stolen-movie-10.jpg',
        // 'http://24.media.tumblr.com/e68455822f14c29d43bacbc19f15ed36/tumblr_mr1kquuOvD1rimb2bo1_400.jpg',
        // 'http://doubleaardvarkmedia.com/wp-content/uploads/2013/07/nicolas_cage_1193538-450-x-450.jpg',
        // 'http://static2.businessinsider.com/image/4adcd99800000000009ed0dd/how-nicolas-cage-spent-his-way-to-the-poorhouse.jpg',
        // 'http://www1.pictures.zimbio.com/pc/Nicolas+Cage+Nicolas+Cage+Emma+Stone+Croods+AbN87pQpWsjl.jpg',
        // 'http://signaltower.co/wp-content/uploads/2013/03/crazy-nicholas-cage-placeholder-image.jpg'
      // ]));
    // }
  // };
//
  // $('#chat-input').on('submit', function(e) {
    // e.preventDefault();
    // if ($input.val().length > 0) {
      // var message = $input.val();
//
      // if (message.split(' ')[1] == 'mode') {
        // mode = message.split(' ')[0];
        // if (modes[mode] !== undefined) {
          // message = 'Hey everybody, I\'ve entered ' + mode + ' mode!';
        // }
        // else {
          // mode = 'chat';
        // }
        // socket.emit('messages:input', message);
      // }
      // else {
        // socket.emit('messages:input', modes[mode](message));
      // }
    // }
    // $input.val('');
    // return false;
  // });
// });

var app = window.app = {};

window.COLOR_LIST = [
  // "aliceblue",
  // "antiquewhite",
  'aqua',
  'aquamarine',
  // "azure",
  // "beige",
  // "bisque",
  'black',
  // "blanchedalmond",
  'blue',
  'blueviolet',
  'brown',
  // "burlywood",
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  // "cornsilk",
  'crimson',
  // "cyan",
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dodgerblue',
  'firebrick',
  // "floralwhite",
  'forestgreen',
  'fuchsia',
  // "gainsboro",
  // "ghostwhite",
  'gold',
  'goldenrod',
  'gray',
  'green',
  // "greenyellow",
  // "honeydew",
  'hotpink',
  'indianred',
  'indigo',
  // "ivory",
  'khaki',
  'lavender',
  // "lavenderblush",
  'lawngreen',
  // "lemonchiffon",
  'lightblue',
  'lightcoral',
  // "lightcyan",
  // "lightgoldenrodyellow",
  'lightgray',            // IE6 breaks on this color
  'lightgreen',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightsteelblue',
  // "lightyellow",
  // "lime",
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  // "mintcream",
  // "mistyrose",
  // "moccasin",
  // "navajowhite",
  'navy',
  // "oldlace",
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  // "papayawhip",
  // "peachpuff",
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  // "seashell",
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  // "snow",
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  // "white",
  // "whitesmoke",
  // "yellow",
  'yellowgreen'
];

var message = Backbone.Model.extend({});

app.messages = new (Backbone.Collection.extend({

  backend: 'messages',

  model: message,

  initialize: function() {
    this.bindBackend();
  }
}))();

var user = Backbone.Model.extend({
  
  setName: function(name) {
    if (app.users.findWhere({name: window.getLocalSetting('name')}) !== undefined) {
      print('WARNING: name ' + name + ' already registered on server');
      return false;
    }
    else {
      this.set('name', name);
      window.setLocalSetting('name', name);
      return true;
    }
  },
  
  setDefaultAttrs: function() {
    var color = window.pickRandom(window.COLOR_LIST);
    this.set('color', color);
      
    while (this.setName(color) !== true) {
      print('name ' + color + ' already taken, trying another one')
      color = window.pickRandom(window.COLOR_LIST);
      this.set('color', color);
    }

    this.set('voice', {
      pitch: window.getRandomInt(0, 100), // 50,
      speed: window.getRandomInt(75, 225), // 175,
      wordgap: window.getRandomInt(0, 30)
    });
  }
});

app.users = new (Backbone.Collection.extend({

  backend: 'users',

  model: user,

  initialize: function() {
    this.bindBackend();
  }
}))();

app.users.on('add', function(user) {
  print(user.get('color') + ' joined');
});

Backbone.io.connect();

app.me = new user();

app.users.fetch({
  success: function(users) {
    
    if (window.getLocalSetting('name', undefined) !== undefined) {
      app.me = app.users.findWhere({name: window.getLocalSetting('name')});
    }
    else {
      app.me.setDefaultAttrs();
      users.add(app.me);
    }
  }
});


});
