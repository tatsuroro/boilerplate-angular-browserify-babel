'use strict';

const moduleName = 'statsRetrieveHistory';

const templateUrl = 'stats/retrieve/history/index.html';

// injects to class constructor
const bind = {
  options  : '='
};

class Controller {
  /*@ngInject*/
  constructor($scope, clientService, statsService) {
    this.clientService = clientService;
    this.statsService = statsService;
    this.list=[];


    this.paginatedTable = {
      limit      : 50,
      offset     : 0,
      maxSize    : 10,
      currentPage: 1,
      columnNames: {
        id: '受付ID',
        accountId : 'アカウントID',
        accountName : 'アカウント名',
        dateStart : '開始期間',
        dateEnd : '終了期間',
        status : 'ステータス',
       	famCreatedAt : '取得日時',
        //createdUser : '作成者'
      }
    };

    this.getList();
  }

  getList() {
    this.statsService.getRetrieveHistory()
      .then((res) => {
        this.list = res.historys;
      },(res) => {
        this.commonService.notify('error','取得に失敗しました');
      });

    return [];
  }
}

const modules = require('../../../../utils/modules');

module.exports = modules.get(moduleName, config.names.contents)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind, templateUrl));
