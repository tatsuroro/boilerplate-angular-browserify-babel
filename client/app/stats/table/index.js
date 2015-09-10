'use strict';

const moduleName = 'statsTable';

const templateUrl = 'stats/table/table.html';

// injects to class constructor
const bind = {
  options  : '='
};

class Controller {
  /*@ngInject*/
  constructor(statsService, editorService) {
    this.constant = require('../stats.constant');

    this.list = [
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと1', 'testCP', 1203, 33],
      ['てすと2', 'testCP', 2341, 44]
    ];
  }
}


const modules = require('../../../utils/modules');

module.exports = modules.get(moduleName, config.names.contents)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind, templateUrl));
