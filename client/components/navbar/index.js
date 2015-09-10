'use strict';

const moduleName = 'navbar';

class Controller {
  /*@ngInject*/
  constructor($scope, $location, clientService) {
    this.$scope = $scope;
    this.$location = $location;
    this.clientService = clientService;
    this.media = clientService.media;

  }

  activate(id) {
    _.map(this.media.selection, (val) => {
      if (val.id === id) {
        this.media.selected = id;
      }
    });
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive(moduleName, modules.getDdo(moduleName, Controller));
