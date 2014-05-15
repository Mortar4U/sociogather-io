define([
  "text!dashboard/tmpls/ircConnectionDlg.html",
  "dashboard/models/ircConnection",
  "dashboard/models/ircChannels",
  "common/js/RView",
  "common/js/EventBus",
  "css!dashboard/styles/ircConnectionDlg.css"
], function(ircConnectionDlg, ircConnection, ircChannels, RView, EventBus) {


  function initialize() {
    RView.prototype.initialize.apply(this, arguments);
    var _self = this;

    this.$el
      .modal()
      .on("hidden.bs.modal", function() {
        _self.remove();
      });
  }


  function model() {
    return {
      connection: new ircConnection(),
      channels: new Backbone.Model({"items": []})
    };
  }


  function saveConnection() {
    this.model.connection.set("channels", this.model.channels);
    EventBus.trigger("new:connection", this.model.connection);
    this.$el.modal("hide");
  }


  return RView.extend({
    className: "modal fade",
    name: "ircConnectionDlg",
    template: ircConnectionDlg,
    initialize: initialize,
    model: model,
    events: {
      "click .connect": saveConnection,
      "submit": saveConnection
    }
  });

});
