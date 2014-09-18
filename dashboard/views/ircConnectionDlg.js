define([
  "text!dashboard/tmpls/ircConnectionDlg.html",
  "dashboard/models/ircConnection",
  "dashboard/models/ircChannels",
  "common/js/RView",
  "common/js/EventBus",
  "css!dashboard/styles/ircConnectionDlg.css"
], function(ircConnectionDlgTmpl, ircConnectionModel, ircChannelsModel, RView, EventBus) {
  "use strict";

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
      connection: new ircConnectionModel()
    };
  }


  function saveConnection() {
    EventBus.trigger("new:connection", this.model.connection);
    this.$el.modal("hide");
  }


  return RView.extend({
    className: "modal fade",
    name: "ircConnectionDlg",
    template: ircConnectionDlgTmpl,
    initialize: initialize,
    model: model,
    events: {
      "click .connect": saveConnection,
      "submit": saveConnection
    }
  });

});
