
'use strict';

var inherit = function(ChildComponent, BaseComponent) {
  var EmptyConstructor = function() {};
  EmptyConstructor.prototype = BaseComponent.prototype;
  ChildComponent.prototype = new EmptyConstructor();
};

module.exports = inherit;
