define([
  "dashboard/models/ircChannel"
], function(ircConnection) {

  var ircChannels = new Backbone.Collection([], {
    model: ircConnection,
    url: function() {
    }
  });

  return ircChannels;

});
