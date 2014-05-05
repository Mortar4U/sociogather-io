define([
  "text!app/main.html",
  "app/routes/transition",
  "css!app/main.css",
  "css!common/css/global.css"
], function(tmpl, transition) {


  function initialize() {
    var _self = this;
    this.$el
      .html($(this.template))
      .addClass("appMain");

    // Setup the transition route
    transition({
      $el: _self.$el.children(".content")
    });
  }


  // Return app view constructor
  return Backbone.View.extend({
    template: tmpl,
    initialize: initialize
  });

});

