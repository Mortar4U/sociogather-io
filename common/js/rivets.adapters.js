define([
  "rivets"
], function(rivets) {
  "use strict";

  function subscription(action, obj, keypath, callback, recurse) {
    if ( obj instanceof Backbone.Collection ) {
      obj[action]("add remove reset", callback);
    }
    else if ( obj instanceof Backbone.Model ) {
      obj[action]("change:" + keypath, callback);
    }
    else if ( recurse !== false && keypath && obj.hasOwnProperty(keypath) ) {
      subscription(action, obj[keypath], keypath, callback, false);
    }
  }

  function read(obj, keypath) {
    if ( obj instanceof Backbone.Collection ) {
      return obj.models;
    }
    else if ( obj instanceof Backbone.Model ) {
      return obj.get(keypath);
    }
    //
    // This conditional is to handle cases where JSON is directly accessed here instead
    // of through the standard '.' adapter.  Handling that here might make the markup a
    // bit cleaner and consistent
    //
    else if ( keypath && obj.hasOwnProperty(keypath) ) {
      //  Let's return the content of the collection so that it can be used directly
      // in iteration contructs such as rv-each-*
      if ( obj[keypath] instanceof Backbone.Collection ) {
        return obj[keypath].models;
      }

      // Otherwise just return the object and let rivets do the rest
      return obj[keypath];
    }
  }

  //
  // Adapter to interface with Backbone models and collections
  //
  rivets.adapters[":"] = {
    subscribe: function(obj, keypath, callback) {
      subscription("on", obj, keypath, callback);
    },
    unsubscribe: function(obj, keypath, callback) {
      subscription("off", obj, keypath, callback);
    },
    read: function(obj, keypath) {
      return read(obj, keypath);
    },
    publish: function( obj, keypath, value ) {
      obj.set(keypath, value);
    }
  };

});
