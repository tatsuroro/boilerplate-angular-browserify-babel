'use strict';

const moduleName = 'sidebar';

class Controller {
  /*@ngInject*/
  constructor($scope, $state, clientService) {
    this.$scope = $scope;
    this.$state = $state;
    this.clientService = clientService;
    this.menus;

    this.$scope.$watch('sidebar.clientService.media.selected', () => {
      this.switchMenus();
    });
  }

  switchMenus() {
    this.menus = config.menus[this.clientService.media.selected];
  }

  go(menu) {
    var params = (!_.isEmpty(menu.params)) ? menu.params : null;

    this.$state.go(menu.state, params);
  }

  isActive(menu) {
    if(!this.$state.includes(menu.state + '.**')){
      return false;
    }
    if(!_.isEmpty(menu.params)) {
        if(!_.isEqual(this.$state.params, menu.params)) {
          return false;
        }
    }

    return true;
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive(moduleName, modules.getDdo(moduleName, Controller));

