'use strict';

const moduleName = 'paginatedTable';

// injects to class constructor
const bind = {
  models  : '=',
  constant: '='
};

class Controller {
  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;

    this.pagination = {
      itemCount: this.models.length
    };

    this.isCheckedAll = false;

    $scope.$watch(() => {
      this.pagination.itemCount = this.models.length;
    });
  }

  toggle() {
    this.models = _.transform(this.models, (res, val) => {
      val.isChecked = this.isCheckedAll;
      res.push(val);
    });
  }
}


const requires = [
  require('./../../filters/offset').name,
  require('../pagination').name
];

const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components, requires)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind));
