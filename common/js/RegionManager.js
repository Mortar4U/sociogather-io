define([
], function() {


  function init(target) {
    target.regions = target.regions || {};
    target.regions.regions = target.regions.regions || {};
    target.regions.singletons = target.regions.singletons || {};
    return target.regions;
  }


  function fromModule(content, target, instances) {
    if (instances[content.module]) {
      return instances[content.module];
    }

    var deferred = $.Deferred();
    instances[content.module] = deferred.promise();

    require([content.module], function(View){
      var view     = new View();
      var $context = target.$el || $(document);
      var $target  = $context;

      if (content.target instanceof jQuery) {
        $target = content.target;
      }
      else if (content.target) {
        $target = $(content.target, $context);
      }

      var result  = {
        view: view,
        content: content,
        target: target,
        $target: $target
      };

      view.$el.appendTo($target);
      deferred.resolve(result);
    });

    return instances[content.module];
  }


  function transient(region, target) {
    throw new Error("Not implemented");
  }


  function singleton(region, target) {
    target = target || {};

    if (region.module) {
      return fromModule(region, target, init(target).singletons);
    }
  }


  return {
    transient: transient,
    singleton: singleton
  };
});
