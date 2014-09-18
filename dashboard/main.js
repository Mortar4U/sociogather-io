define([
  "text!dashboard/main.html",
  "dashboard/views/MainMenu",
  "dashboard/views/Connections",
  "common/js/RView",
  "css!dashboard/main.css"
], function(MainTmpl, MainMenuView, ConnectionsView, RView) {

  function initialize() {
    RView.prototype.initialize.apply(this, arguments);

    this.mainMenuView = new MainMenuView({
      el: this.$el.children(".mainMenuContainer")
    });

    this.connectionsView = new ConnectionsView({
      el: this.$el.find(".connectionsContainer")
    });
  }

  return RView.extend({
    name: "Dashboard",
    template: MainTmpl,
    initialize: initialize
  });

});
