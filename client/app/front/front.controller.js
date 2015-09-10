'use strict';

class Controller {
  /*@ngInject*/
  constructor () {
    this.headerLabel = config.names.app;
    this.menus = [];

    this.menus = config.menus;
  }

}

module.exports = Controller;
