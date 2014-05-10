define([

], function() {


  /**
  * Override loadUrl in order to support handling multiple matching URLs
  * Traditional routes would only process the first.
  */
  Backbone.history.loadUrl = function(fragment) {
    fragment = this.fragment = this.getFragment(fragment);
    return _.each(this.handlers, function(handler) {
      if (handler.route.test(fragment)) {
        handler.callback(fragment);
      }
    });
  };


  /**
  * Interface to register route listeners and that will get notified immediately
  * if the current route matches the registered pattern
  */
  Backbone.Router.prototype.register = function(route, callback) {
    var router = this;
    var fragment = Backbone.history.getFragment();
    var routeName = route.split(":")[1];
    var handler = _.invert(router.routes);

    router.on(route, callback);
    route = router._routeToRegExp(handler[routeName]);
    if ( route.test(fragment) ) {
      var args = router._extractParameters(route, fragment);
      if ( callback ) callback.apply(router, args);
    }
  };


});

