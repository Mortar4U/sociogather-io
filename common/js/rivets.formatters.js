define([
  "rivets"
], function( rivets ) {

  rivets.formatters.stringify = function(value) {
    if ( _.isArray(value) ) {
      return value.join(", ");
    }
  };

});
