'use strict';

const moduleName = 'pagination';

// injects to class constructor
const bind = {
  models  : '=',
  constant: '='
};

class Controller {
  /*@ngInject*/
  constructor($scope) {
    this.models.limit       = _.cloneDeep(this.constant.limit);
    this.models.currentPage = _.cloneDeep(this.constant.currentPage);

    this.models.numPages = null;

    $scope.$watch(() => {
      this.models.offset = (this.models.currentPage - 1) * this.models.limit;
    });
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive('tablePagination', modules.getDdo(moduleName, Controller, false, bind));
