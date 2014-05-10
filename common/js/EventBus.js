define([
], function() {

  // Dummy event bus object used as a global object to send application level events
  var EventBus = $(document);
  Backbone.EventBus = EventBus;
  return EventBus;

});
