define([
  "text!dashboard/json/settings.json"
], function(settings) {

  settings = JSON.parse(settings);

  var Model = Backbone.Model.extend({
    defaults: {
    },
    url: function() {
      return settings.server + "/connections";
    }
  });

  return Model;

});
