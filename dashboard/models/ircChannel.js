define([
  "text!dashboard/json/ircSettings.json"
], function(ircSettings) {

  var settings = JSON.parse(ircSettings);

  var Model = Backbone.Model.extend({
    defaults: {
      channel: ""
    },
    url: function() {
      if ( !this.server ) {
        throw new Error("No server specified");
      }

      return settings.server + "/join/" + this.server.cid;
    }
  });

  return Model;

});
