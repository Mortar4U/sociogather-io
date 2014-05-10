define([
  "rivets"
], function(rivets) {


  function initialize() {
    this.$el
      .html($(this.template))
      .addClass(this.name);

    if ( this.model ) {
      this._rv = rivets.bind(this.$el, _.result(this, "model"));
    }
  }


  return Backbone.View.extend({
    template: "<div>",
    name: "GenericViewNext",
    initialize: initialize
  });

});
