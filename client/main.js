var me = window.me = new user();

Backbone.io.connect();

app.users.fetch({
  success: function(users) {
    if (!users.contains(me)) {
      users.add(me);
      me.assignDefaultAttrs();
    }
  }
});
