define([
  "text!dashboard/json/settings.json"
], function(settings) {

  settings = JSON.parse(settings);

  var Model = Backbone.Model.extend({
    defaults: {
      server: "",
      port: "",
      nickname: "",
      fullname: ""
    },
    url: function() {
      return settings.server + "/irc/connect";
    }
  });

  return Model;

});
