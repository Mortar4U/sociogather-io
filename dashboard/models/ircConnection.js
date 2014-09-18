define([
  "text!dashboard/json/settings.json"
], function(settings) {

  settings = JSON.parse(settings);

  var Model = Backbone.Model.extend({
    defaults: {
      channels: [],
      type: "irc",
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
