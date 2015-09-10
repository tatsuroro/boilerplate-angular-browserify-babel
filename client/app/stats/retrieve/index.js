'use strict';
const moment = require('moment');

const moduleName = 'statsRetrieve';

const templateUrl = 'stats/retrieve/index.html';

// injects to class constructor
const bind = {
  options  : '='
};

class Controller {
  /*@ngInject*/
  constructor($scope, $state, commonService, clientService, statsService) {
    this.constant = require('../stats.constant');
    this.commonService = commonService;
    this.clientService = clientService;
    this.statsService = statsService;
    this.$state = $state;
    this.termdate = {};
    this.isRetrieve = false;
  }

  isDisabledRetrieve() {
    if (!this.termdate.isValid ||
        _.isEmpty(this.clientService.accounts.selected) ||
        this.isRetrieve) {
          return true;
        }

    return false;
  }

  retrieve() {
    var formData = {
      adAccountId: this.clientService.accounts.selected[0].id,
      dateStart    : moment(this.termdate.termArr[0].from).format('YYYY-MM-DD'),
      dateEnd     : moment(this.termdate.termArr[0].to).format('YYYY-MM-DD'),
    };

    this.isRetrieve = true;
    this.statsService.postRetrieve(formData).then((res) => {
        this.isRetrieve = false;
        if(res.historyId){
          this.commonService.notify('success','再取得リクエストを行いました。完了までしばらくお待ちください ( 受付ID：'+res.historyId+" )");
        }else{
          this.commonService.notify('error','登録に失敗しました');
        }
    },(res) => {
      this.isRetrieve = false;
      this.commonService.notify('error','登録に失敗しました');
    });
  }
}

const modules = require('../../../utils/modules');

module.exports = modules.get(moduleName, config.names.contents)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind, templateUrl));
