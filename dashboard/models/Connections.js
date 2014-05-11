define([
  "text!dashboard/json/settings.json"
], function(settings) {

  settings = JSON.parse(settings);

  function initialize() {
  }

  var Model = Backbone.Collection.extend({
    initialize: initialize,
    url: function() {
      return settings.server + "/connections";
    }
  });

  return Model;

});
