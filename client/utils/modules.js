'use strict';

var modules = {
  get: (name, type, requires = []) => {
    return angular.module(type + '.' + name, requires);
  },

  getDdo: (moduleName, controller, isDirective = false, bindToController = {}, templateUrl = null) => {

    var restrict = 'A';
    if(!isDirective){
      restrict = 'E';
      templateUrl = (templateUrl) ? templateUrl : moduleName + '/' + moduleName + '.html';
    }

    return () => {
      return {
        templateUrl     : templateUrl,
        restrict        : restrict,
        scope           : {},
        bindToController: bindToController,
        controllerAs    : moduleName,
        controller      : controller
      };
    };
  }
};


module.exports = modules;
