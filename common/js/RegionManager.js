define([
], function() {

  var RegionManager = {};


  function init(target) {
    target = target || {};
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

    require([content.module], function( View ){
      var view    = new View();
      var $target = content.target instanceof jQuery ? content.target : $(target.$el || $(document), content.target);
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


  function create(/*region, target*/) {
    throw new Error("Not implemented");
  }


  function singleton(content, target) {
    target = target || {};

    if (content.module) {
      return fromModule(content, target, init(target).singletons);
    }
  }


  RegionManager.create = create;
  RegionManager.singleton = singleton;
  return RegionManager;
});
