define([
  "text!dashboard/tmpls/MainMenu.html",
  "dashboard/views/ircConnectionDlg",
  "dashboard/models/ircConnections",
  "common/js/RView",
  "css!dashboard/styles/MainMenu.css"
], function(mainMenuTmpl, ircConnectionDlg, ircConnectionsModel, RView) {


  function ircConnection() {
    this.ircConnectionDlg = new ircConnectionDlg();
  }


  return RView.extend({
    name: "MainMenu",
    template: mainMenuTmpl,
    events: {
      "click .ircConnection": ircConnection
    }
  });

});
