define([
  "rivets",
  "text!dashboard/tmpls/ircConnections.html",
  "dashboard/models/ircConnections",
  "css!dashboard/styles/ircConnections.css"
], function(rivets, tmpl, ircConnectionsModel) {


  function initialize() {
    this.$el
      .html($(this.template))
      .addClass("ircConnections");

    rivets.bind(this.$el, {
      connections: ircConnectionsModel
    });
  }


  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});

