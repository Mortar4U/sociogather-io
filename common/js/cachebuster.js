define([
  "text!common/json/version.json?bust=" +  (new Date()).getTime()
], function(version) {
  "use strict";

  // Convert text to JSON
  version = JSON.parse(version);

  requirejs.config({
    urlArgs: "v=" + version.v
  });

});
