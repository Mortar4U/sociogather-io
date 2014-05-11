define([
  "text!dashboard/tmpls/ircChannels",
  "common/js/RView"
], function(ircChannelsTmpl, RView) {

  return RView.extend({
    name: "ircChannels",
    template: ircChannelsTmpl
  });

});
