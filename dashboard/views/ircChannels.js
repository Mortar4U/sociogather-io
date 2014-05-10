define([
  "text!dashboard/tmpls/ircChannels",
  "common/js/ViewNext"
], function(ircChannelsTmpl, ViewNext) {

  return ViewNext.extend({
    name: "ircChannels",
    template: ircChannelsTmpl
  });

});
