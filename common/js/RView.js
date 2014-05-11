define([
  "rivets",
  "common/js/rivets.adapters",
  "common/js/rivets.binders",
  "common/js/rivets.formatters"
], function(rivets) {
  "use strict";

  function initialize() {
    this.$el
      .html($(this.template))
      .addClass(this.name);

    if ( this.model ) {
      this.model = _.result(this, "model");
      this._rv = rivets.bind(this.$el, {model: this.model});
    }
  }

  var RView = Backbone.View.extend({
    template: "<div>",
    name: "GenericRView",
    initialize: initialize
  });

  Backbone.RView = RView;
  return RView;
});
