'use strict';

require('jquery');

var moment = require('moment');

const moduleName = 'csvDownloader';

const requires = [
  require('ng-csv').name
];

// injects to class constructor
const bind = {
  models  : '=',
  btnName: '@?'
};

class Controller {
  /*@ngInject*/
  constructor($scope, $element, $timeout) {
    this.$element = $element;
    this.$timeout = $timeout;
    this.btnName = (_.isUndefined(!this.btnName)) && 'Download';
  }

  download() {
    this.filename = this.filename + '_' + moment().format('YYYYMMDD_HHMMSS') + '.csv';

    this.$timeout(() => {
      this.$element.find('#csv').trigger('click');
    });
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components, requires)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind));

