define([
  "rivets"
], function(rivets){

  rivets.binders.console = function() {
    var argi = 0, argc = arguments.length;

    while(argi < argc) {
      console.log(arguments[argi]);
    }
  };
});
