define([
  "text!chatter/main.html",
  "chatter/routes/transition",
  "common/js/RView",
  "css!chatter/main.css"
], function(MainTmpl, transition, RView) {

  function initialize() {
    RView.prototype.initialize.apply(this, arguments);

    transition({
      $el: this.$el.children(".content")
    });
  }

  return RView.extend({
    name: "Chatter",
    template: MainTmpl,
    initialize: initialize
  });

});
