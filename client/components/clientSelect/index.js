'use strict';

const moduleName = 'clientSelect';

const bind = {
};

class Controller {
  /*@ngInject*/
  constructor($scope, clientService, commonService) {
    this.$scope = $scope;
    this.clientService = clientService;
    this.commonService = commonService;

    this.constant = {
      notifyText: {
        error: 'クライアント一覧の取得に失敗しました',
        errorGetAccounts: 'アカウント一覧の取得に失敗しました'
      }
    };

    /**
     * client Selections for ui-select
     * ここでしか使わないので、Component Model化し、共有サービスとは切り離す
     */
    this.clients = [];

    // init
    this.getClients();

  }

  clear() {
    this.clientService.clearClient();
  }

  refresh() {
    this.clear();
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
      .then((res) => {
        const clients = res.clients;

        if (_.isEmpty(clients)) {
          this.commonService.notify('error', this.constant.notifyText.error);
          return false;
        }

        this.clients = clients;

        // initial selected
        this.clientService.client = clients[0];

        this.getMediaAccounts();
      }, (error) => {
        console.error(error);
        this.commonService.notify('error', this.constant.notifyText.error);
      });
  }

  getMediaAccounts() {
    const params = {
      clientId: this.clientService.client.id,
      media: _.pluck(this.clientService.media.selection, 'id').join(',')
    };

    this.clientService.getMediaAccounts(params)
      .then((res) => {
        console.log(this.clientService.accounts.selection);
      }, (error) => {
        this.commonService.notify('error', this.constant.notifyText.errorGetAccounts);
      });
  }

}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind));
