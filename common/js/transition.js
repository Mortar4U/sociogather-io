define(function() {
  "use strict";

  function Transition(options) {
    this.options = options;
  }

  Transition.prototype.show = function (View, options) {
    if ( this.current ) {
      // Make sure we clean up the current view
      this.current.trigger("hide");
      this.current.remove();
    }

    this.current = new View();
    this.current.$el.appendTo((options || this.options).$el.empty());
    this.current.trigger("show");
  };

  return Transition;
});
