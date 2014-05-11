define([
  "text!dashboard/tmpls/ircConnectionDlg.html",
  "dashboard/models/ircConnection",
  "common/js/RView",
  "common/js/EventBus",
  "css!dashboard/styles/ircConnectionDlg.css"
], function(ircConnectionDlg, ircConnection, RView, EventBus) {


  function initialize() {
    RView.prototype.initialize.apply(this, arguments);
    var _self = this;

    this.$el
      .addClass("modal fade")
      .modal()
      .on("hidden.bs.modal", function() {
        _self.remove();
      });
  }


  function model() {
    return {
      connection: new ircConnection(),
      channels: new Backbone.Model({items:""})
    };
  }


  function saveConnection() {
    EventBus.trigger("new:connection", this.model.connection, this.model.channels);
    this.$el.modal("hide");
  }


  return RView.extend({
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
