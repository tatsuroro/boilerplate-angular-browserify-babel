'use strict';

const moment = require('moment');

const moduleName = 'statsForm';

const templateUrl = 'stats/form/index.html';

// injects to class constructor
const bind = {
  options  : '='
};

class Controller {
  /*@ngInject*/
  constructor($scope, statsService, clientService, commonService) {
    this.constant = require('../stats.constant');

    this.statsService = statsService;
    this.clientService = clientService;
    this.commonService = commonService;

    this.component = {
      facebook: 'adaccounts',
      twitter: 'ad-group'
    };

    this.format = 'summary';

    this.termdate = {};

    this.spendMargin = this.constant.spendMargin.def;

    this.isModifySpendMargin = false;
  }

  isDisabledSubmit() {
    if (!this.termdate.isValid ||
      _.isEmpty(this.clientService.accounts.selected) ||
      _.isUndefined(this.spendMargin) ||
      _.isNull(this.spendMargin)) {
      return true;
    }

   return false;
  }

  prepare() {
    // set spendMargin for Output
    if (!this.isModifySpendMargin) this.spendMargin = this.constant.spendMargin.def;

    this.output(this._getParams());
  }

  output(options) {
    this.statsService.getStats(options, true)
      .then((res) => {
        if (!res) {
          this.commonService.notify('error', 'レポートのダウンロードに失敗しました');
          return;
        }

        // download

      }, (error) => {
        this.commonService.notify('error', 'レポートのダウンロードに失敗しました | ErrorStatus: ' + error.status);
      });
  }

  _getParams() {
    if (this.clientService.media.selected === 'facebook') return this._getParamsFacebook();

    return this._getParamsTwitter();
  }

  _getParamsFacebook() {
    var params = {
      adAccountId: this.clientService.accounts.selected[0].id,
      component  : this.component.facebook,
      dateStart  : moment(this.termdate.termArr[0].from).format('YYYY-MM-DD'),
      dateEnd    : moment(this.termdate.termArr[0].to).format('YYYY-MM-DD'),
      format     : this.format
    };

    if (!_.isNull(this.spendMargin)) params.spendMargin = this.spendMargin / 100;

    return params;
  }

  _getParamsTwitter() {
    var params = {
      adAccountId: this.clientService.accounts.selected[0].id,
      segment    : this.component.twitter,
      dayFrom    : moment(this.termdate.termArr[0].from).format('YYYY-MM-DD'),
      dayTo      : moment(this.termdate.termArr[0].to).format('YYYY-MM-DD'),
      type       : this.format
    };

    return params;
  }
}


const modules = require('../../../utils/modules');

module.exports = modules.get(moduleName, config.names.contents)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind, templateUrl));
