// Setup requirejs configuration
requirejs.config({
  paths: {
    "backbone": "libs/backbone/backbone",
    "underscore": "libs/underscore/underscore",
    "jquery": "libs/jquery/dist/jquery",
    "bootstrap": "libs/bootstrap/dist/js/bootstrap",
    "hash.route": "libs/hash.route/hash.route",
    "rivets": "libs/rivets/dist/rivets",
    "rivets.adapter": "common/js/rivets.adapter",
    "md5": "libs/js/md5",
    "text": "libs/js/require.text",
    "css": "libs/js/require.css"
  },
  "shim": {
    "main": {
      deps: ["common/js/cachebuster", "rivets.adapter"]
    },
    "common/js/cachebuster": {
      deps: [
        "rivets",
        "backbone",
        "md5",
        "bootstrap",
        "css!libs/font-awesome-4.0.3/css/font-awesome.css",
        "css!libs/bootstrap/dist/css/bootstrap.css"
      ]
    },
    "backbone": {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    "underscore": {
      "exports": "_"
    },
    "bootstrap": {
      deps: ["jquery"]
    }
  },
  packages: [
    "app",
    "dashboard",
    "tests",
    "yourmodule"
  ]
});
