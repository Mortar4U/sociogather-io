define([
  "dashboard/models/ircChannel"
], function(ircChannel) {

  var ircChannels = Backbone.Collection.extend({
    model: ircChannel,
    url: function() {
    }
  });

  return ircChannels;

});
