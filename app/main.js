define([
  "text!app/main.html",
  "app/routes/transition",
  "common/js/RView",
  "css!app/main.css",
  "css!common/css/global.css"
], function(AppMainTmpl, transition, RView) {


  function initialize() {
    RView.prototype.initialize.apply(this, arguments);

    // Setup the transition route
    transition({
      $el: this.$el.children(".content")
    });
  }


  // Return app view constructor
  return RView.extend({
    name: "AppMain",
    template: AppMainTmpl,
    initialize: initialize
  });

});

