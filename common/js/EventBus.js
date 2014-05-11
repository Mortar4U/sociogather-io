define([
], function() {
  "use strict";

  // Dummy event bus object used as a global object to send application level events
  var EventBus = {};
  Backbone.EventBus = _.extend(EventBus, Backbone.Events);
  return EventBus;

});
