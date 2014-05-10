define([
  "text!dashboard/tmpls/chat.html",
  "dashboard/js/chat",
  "css!dashboard/styles/chat.css"
], function(tmpl, Chat) {

  function initialize() {
    this.$el
      .html($(this.template))
      .addClass("chat");

    /*
    this.chat = new Chat();

    this.chat
      .connect({
        "username": "manchagnu",
        "server": "irc.freenode.net",
        "port": 6667
      })
      .done(function(connection) {
        console.log(connection);
        _self.chat.join({"channel":"#mortar4u"});

        //_self.chat.getAll();
        //setInterval(function() {
        //  _self.chat.getAll();
        //}, 5000);
      });
      */
  }

  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
