define([
  "text!dashboard/tmpls/mainMenu.html",
  "dashboard/views/ircConnectionDlg",
  "dashboard/models/ircConnections",
  "css!dashboard/styles/mainMenu.css"
], function(tmpl, ircConnectionDlg, ircConnectionsModel) {

  function initialize() {
    this.$el
      .html($(this.template))
      .addClass("mainMenu");
  }


  function ircConnection() {
    if ( this.ircConnection ) {
      this.ircConnection.remove();
    }

    this.ircConnection = new ircConnectionDlg();
    this.listenTo(this.ircConnection, "connection", function(connection, channels) {
      ircConnectionsModel.push(connection);
    });
  }


  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize,
    events: {
      "click .ircConnection": ircConnection
    }
  });

});
