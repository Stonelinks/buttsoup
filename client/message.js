var message = Backbone.Model.extend({});

app.messages = new (Backbone.Collection.extend({

  backend: 'messages',

  model: message,

  initialize: function() {
    this.bindBackend();
  }
}))();
