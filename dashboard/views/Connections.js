define([
  "text!dashboard/tmpls/Connections.html",
  "dashboard/models/Connections",
  "text!dashboard/json/regions.json",
  "common/js/RView",
  "common/js/EventBus",
  "common/js/RegionManager"
], function(ConnectionsTmpl, ConnectionsModel, regions, RView, EventBus, RegionManager) {


  // Load regions map
  regions = JSON.parse(regions);


  function initialize() {
    // Call super initialize to properly initilize the view
    RView.prototype.initialize.apply(this, arguments);

    // Register listener for new connections
    this.listenTo(EventBus, "new:connection", function(connection) {
      RegionManager.singleton(regions[connection.get("type")], this).done(function(result) {
        result.view.model.connections.add(connection);
      });
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
