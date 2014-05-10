define([
  "text!dashboard/tmpls/ircConnections.html",
  "dashboard/models/ircConnections",
  "common/js/ViewNext",
  "css!dashboard/styles/ircConnections.css"
], function(irConnectionsTmpl, ircConnectionsModel, ViewNext) {


  function model() {
    return {
      connections: new ircConnectionsModel()
    };
  }


  return ViewNext.extend({
    name: "ircConnections",
    template: irConnectionsTmpl,
    model: model
  });

});

