define([
  "text!dashboard/main.html",
  "dashboard/views/mainMenu",
  "dashboard/views/ircConnections",
  "dashboard/views/chat",
  "css!dashboard/main.css"
], function(tmpl, MainMenuView, ircConnectionsView) {

  function initialize() {
    this.$el
      .html(this.template)
      .addClass("dashboard");

    this.mainMenuView = new MainMenuView({
      el: this.$el.children(".mainMenuContainer")
    });

    this.ircConnectionsView = new ircConnectionsView({
      el: this.$el.children(".content")
    });
  }

  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
