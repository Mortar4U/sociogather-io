define([
  "text!dashboard/json/ircSettings.json"
], function(ircSettings) {

  var settings = JSON.parse(ircSettings);

  var Model = Backbone.Model.extend({
    defaults: {
      server: "",
      port: "",
      nickname: "",
      fullname: ""
    },
    url: function() {
      return settings.server + "/connect";
    }
  });

  return Model;

});
