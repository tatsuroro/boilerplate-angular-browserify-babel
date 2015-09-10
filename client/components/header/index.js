'use strict';

const moduleName = 'header';

// injects to class constructor
const bind = {
  label: '@?',
  tabs : '=?',
  title: '@?'
};

class Controller {
  /*@ngInject*/
  constructor(clientService) {
    this.clientService = clientService;

    this.labelName;
    if (this.label) {
      this.labelName = this.getLabel();
    }

  }

  getLabel() {
    if (this.label === 'front') return config.names.app;

    return _.find(config.menus[this.clientService.media.selected], {id: this.label}).name;
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive('idHeader', modules.getDdo(moduleName, Controller, false, bind));
