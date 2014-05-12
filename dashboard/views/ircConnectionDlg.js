define([
  "text!dashboard/tmpls/ircConnectionDlg.html",
  "dashboard/models/ircConnection",
  "common/js/RView",
  "common/js/EventBus",
  "css!dashboard/styles/ircConnectionDlg.css"
], function(ircConnectionDlg, ircConnection, RView, EventBus) {


  function initialize() {
    var _self = this;

    RView.prototype.initialize.apply(this, arguments);

    this.$el
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
    cls: "modal fade",
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
