define([
  "hash.route",
  "common/js/transition"
], function(hash, Transition) {

  var routePattern = "chatter/:subview/**:args";

  function registerRoute(options) {
    // Transition manager
    var transition = new Transition(options);
    var current;

    function onRouteEnter() {
    }

    function onRouteChange(evt, subview, args, vars) {
      if ( current === subview || !subview ) {
        return;
      }

      current = "chatter/views/" + subview;
      // Load the root of the URL as a package module
      require([current], function(view) {
        //transition.show(view);
      });
    }

    function onRouteLeave() {
      // When route is out of scope and will not get any more changes
//      hash(routePattern)
//        .off("enter",  onRouteEnter)
//        .off("change", onRouteChange)
//        .off("leave",  onRouteLeave);
    }

    // Register route change handler
    hash(routePattern)
      .on("enter",  onRouteEnter)
      .on("change", onRouteChange)
      .on("leave",  onRouteLeave);
  }

  return registerRoute;
});
