define([
  "text!dashboard/tmpls/ircChannels"
], function(tmpl) {

  function initialize() {
    this.$el
      .html($(this.template))
      .addClass("ircChannels");
  }


  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});
