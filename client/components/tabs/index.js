'use strict';

const moduleName = 'tabs';

const bind = {
  items: '='
};

class Controller {
  /*@ngInject*/
  constructor($scope, $state, $stateParams) {
    this.$state = $state;
    this.dimension = $stateParams.dimension;

    $scope.$watch($state.current.name, () => {
      this.setActiveTab();
    });
  }

  setActiveTab() {
    _.map(this.items, (val, i) => {
      this.items[i].active = (this.$state.includes(val.state));
    });
  }

  go(tab) {
    this.$state.go(tab.state, {dimension: this.dimension});
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind));
