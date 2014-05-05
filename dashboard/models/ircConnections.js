define([
  "dashboard/models/ircConnection"
], function(ircConnection) {

  var ircConnections = new Backbone.Collection([], {
    model: ircConnection,
    url: function() {
      console.log("ircConnections URL");
    }
  });

  return ircConnections;

});
