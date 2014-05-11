define([
  "dashboard/models/ircConnection"
], function(ircConnection) {

  var ircConnections = Backbone.Collection.extend([], {
    model: ircConnection,
    url: function() {
      console.log("ircConnections URL");
    }
  });

  return ircConnections;

});
