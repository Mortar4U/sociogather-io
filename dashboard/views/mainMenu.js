define([
  "text!dashboard/tmpls/MainMenu.html",
  "dashboard/views/ircConnectionDlg",
  "dashboard/models/ircConnections",
  "common/js/ViewNext",
  "css!dashboard/styles/MainMenu.css"
], function(MainMenuTmpl, ircConnectionDlg, ircConnectionsModel, ViewNext) {


  function ircConnection() {
    if ( this.ircConnection ) {
      this.ircConnection.remove();
    }

    this.ircConnection = new ircConnectionDlg();
    this.listenTo(this.ircConnection, "new:connection", function(connection, channels) {
      //this.ircConnectionsView = new ircConnectionsView();
      ircConnectionsModel.push(connection);
    });
  }


  return ViewNext.extend({
    name: "MainMenu",
    template: MainMenuTmpl,
    events: {
      "click .ircConnection": ircConnection
    }
  });

});
