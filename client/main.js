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


