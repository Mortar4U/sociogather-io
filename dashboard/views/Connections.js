define([
  "text!dashboard/tmpls/Connections.html",
  "dashboard/models/Connections",
  "common/js/RView",
  "common/js/EventBus"
], function(ConnectionsTmpl, ConnectionsModel, RView, EventBus) {


  function initialize() {
    // Call super initialize to properly initilize the view
    RView.prototype.initialize.apply(this, arguments);

    // Register listener for new connections
    this.listenTo(EventBus, "new:connection", function(connection) {
      this.model.connections.add(connection);
    });
  }


  function model() {
    return {
      connections: new ConnectionsModel()
    };
  }


  return RView.extend({
    name: "Connections",
    initialize: initialize,
    template: ConnectionsTmpl,
    model: model
  });

});
