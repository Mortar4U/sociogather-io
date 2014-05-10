define([
  "text!dashboard/main.html",
  "dashboard/views/MainMenu",
  "dashboard/views/Connections",
  "common/js/ViewNext",
  "dashboard/views/chat",
  "css!dashboard/main.css"
], function(MainTmpl, MainMenuView, ConnectionsView, ViewNext) {

  function initialize() {
    ViewNext.prototype.initialize.apply(this, arguments);

    this.mainMenuView = new MainMenuView({
      el: this.$el.children(".mainMenuContainer")
    });

    this.connectionsView = new ConnectionsView({
      el: this.$el.find(".conntectionsContainer")
    });
  }

  return ViewNext.extend({
    name: "Dashboard",
    template: MainTmpl,
    initialize: initialize
  });

});
