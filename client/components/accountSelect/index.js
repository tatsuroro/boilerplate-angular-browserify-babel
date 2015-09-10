'use strict';

const moduleName = 'accountSelect';

const bind = {
  isSingle     : '@?'
};

class Controller {
  /*@ngInject*/
  constructor($scope, clientService) {
    this.$scope = $scope;
    this.clientService = clientService;

    this.$scope.$watch('accountSelect.clientService.media.selected', (newval, oldval) => {
      if (newval !== oldval) this.clear();
    });

    if (_.isUndefined(this.isSingle) || _.isNull(this.isSingle)) this.isSingle = false;
  }

  clear() {
    this.clientService.clearAccounts();
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind));
