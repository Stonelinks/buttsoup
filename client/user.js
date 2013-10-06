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
