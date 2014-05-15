define([
  "rivets"
], function( rivets ) {

  rivets.formatters.stringify = function(value) {
    if ( _.isArray(value) ) {
      return value.join(", ");
    }
  };


  rivets.formatters["input-array"] = {
    read: function(value) {
      return value.join(" ");
    },
    publish: function(value) {
      return value.split(" ");
    }
  };

});
