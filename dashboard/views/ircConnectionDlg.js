define([
  "text!dashboard/tmpls/ircConnectionDlg.html",
  "dashboard/models/ircConnection",
  "common/js/RView",
  "css!dashboard/styles/ircConnectionDlg.css"
], function(ircConnectionDlg, ircConnection, RView) {


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
      channels: new Backbone.Model({channels:""})
    };
  }


  function saveConnection() {
    this.trigger("new:connection", this.model.connection, this.model.channels);
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
