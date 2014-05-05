define([
  "rivets",
  "text!dashboard/tmpls/ircConnectionDlg.html",
  "dashboard/models/ircConnection",
  "css!dashboard/styles/ircConnectionDlg.css"
], function(rivets, tmpl, ircConnection) {


  function initialize() {
    var _self = this;

    this.$el
      .html($(this.template))
      .addClass("modal fade ircConnectionDlg")
      .modal()
      .on("hidden.bs.modal", function() {
        _self.remove();
      });

    this.connection = new ircConnection();
    this.channels = new Backbone.Model({channels:""});

    rivets.bind(this.$el, {
      connection: this.connection,
      channels: this.channels
    });
  }


  function saveConnection() {
    this.trigger("connection", this.connection, this.channels);
    this.$el.modal("hide");
  }


  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize,
    events: {
      "click .connect": saveConnection,
      "submit": saveConnection
    }
  });

});
