'use strict';

class Controller {
  /*@ngInject*/
  constructor() {
    this.options = {test: 'options'};

    this.constant = require('./stats.constant');
    this.retrieve = _.cloneDeep(this.constant.retrieve);
  }
}


module.exports = Controller;
