var user = Backbone.Model.extend({
  
  assignDefaultAttrs: function() {
    
    if (this.has('color')) {
      this.set('color', window.pickRandom(window.COLOR_LIST));
    }

    if (this.has('voice')) {
      this.set('voice', {
        pitch: window.getRandomInt(0, 100), // 50,
        speed: window.getRandomInt(75, 225), // 175,
        wordgap: window.getRandomInt(0, 30)
      });
    }
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

