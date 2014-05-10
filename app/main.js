define([
  "text!app/main.html",
  "app/routes/transition",
  "common/js/ViewNext",
  "css!app/main.css",
  "css!common/css/global.css"
], function(AppMainTmpl, transition, ViewNext) {


  function initialize() {
    ViewNext.prototype.initialize.apply(this, arguments);

    // Setup the transition route
    transition({
      $el: this.$el.children(".content")
    });
  }


  // Return app view constructor
  return ViewNext.extend({
    name: "AppMain",
    template: AppMainTmpl,
    initialize: initialize
  });

});

