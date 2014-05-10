define([
  "text!dashboard/tmpls/Connections.html",
  "dashboard/models/Connections",
  "common/js/ViewNext",
  "common/js/EventBus"
], function(ConnectionsTmpl, ConnectionsModel, ViewNext, EventBus) {


  function initialize() {
    // Call super initialize to properly initilize the view
    ViewNext.prototype.initialize.apply(this, arguments);

    // Register listener for new connections
    EventBus.on("new:connection", function(evt) {
      console.log(evt);
    });
  }


  function model() {
    return {
      connection: new ConnectionsModel()
    };
  }


  return ViewNext.extend({
    name: "Connections",
    initialize: initialize,
    template: ConnectionsTmpl,
    model: model
  });

});
