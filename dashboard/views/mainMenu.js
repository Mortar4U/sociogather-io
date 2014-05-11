define([
  "text!dashboard/tmpls/MainMenu.html",
  "dashboard/views/ircConnectionDlg",
  "dashboard/models/ircConnections",
  "common/js/RView",
  "common/js/EventBus",
  "css!dashboard/styles/MainMenu.css"
], function(MainMenuTmpl, ircConnectionDlg, ircConnectionsModel, RView, EventBus) {


  function ircConnection() {
    if ( this.ircConnection ) {
      this.ircConnection.remove();
    }

    this.ircConnectionDlg = new ircConnectionDlg();
    this.listenTo(this.ircConnectionDlg, "new:connection", function(connection, channels) {
      EventBus.trigger("new:connection", connection);
    });
  }


  return RView.extend({
    name: "MainMenu",
    template: MainMenuTmpl,
    events: {
      "click .ircConnection": ircConnection
    }
  });

});
