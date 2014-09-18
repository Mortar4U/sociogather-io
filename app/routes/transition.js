define([
  "hash.route",
  "common/js/transition"
], function(hash, Transition) {

  // Handle empty routes
  hash("").on("change", function() {
    hash.navigate("dashboard");
  });


  function registerRoute(options) {
    // Transition manager
    var transition = new Transition(options);
    var current;

    function onRouteEnter() {
    }

    function onRouteChange(evt, root) {
      if ( current === root ) {
        return;
      }

      current = root;
      // Load the root of the URL as a package module
      require([root], function(view) {
        transition.show(view);
      });
    }

    function onRouteLeave() {
    }

    // Register route change handler
    hash(":root/**")
      .on("enter", onRouteEnter)
      .on("change", onRouteChange)
      .on("leave", onRouteLeave);
  }

  return registerRoute;
});
