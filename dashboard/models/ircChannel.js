define([
  "text!dashboard/json/settings.json"
], function(settings) {

  settings = JSON.parse(settings);

  var Model = Backbone.Model.extend({
    defaults: {
      channel: ""
    },
    url: function() {
      if ( !this.server ) {
        throw new Error("No server specified");
      }

      return settings.server + "/irc/join/" + this.server.cid;
    }
  });

  return Model;

});
