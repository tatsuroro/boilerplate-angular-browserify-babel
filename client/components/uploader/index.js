/**
 * FileUploader
 */

'use strict';

require('jquery');

const moduleName = 'uploader';

// injects to class constructor
const bind = {
  models  : '=',
  service : '=',
  type    : '@',
  name    : '@',
  btnText : '@?'
};

class Controller {
  /*@ngInject*/
  constructor($scope, $timeout, $element, commonService) {
    this.$timeout = $timeout;
    this.commonService = commonService;

    this.constant = {
      notifyText: {
        typeError: 'アップロードするファイルの種類が違います。 ' + this.type + 'ファイルを選択してください'
      }
    };

    this.btnText = (this.btnText) ? this.btnText : '選択';

    var inputFile = $($element).find("#inputFile");

    inputFile.bind('change', (event) => {
      $scope.$apply(() => {
        if (inputFile.val()) this.models = event.target.files[0];
      });
    });
  }

  select(event) {
    this.$timeout(() => {
      $(event.target)
        .closest("#uploader")
        .find("input[type=file]")
        .trigger('click');
    });
  }

  upload() {
    this.service(this._getFormData(this.models), this.models.name);
  }

  _getFormData(file) {
    if (!file.size) return false;

    if (file.name.indexOf(this.type) === -1) {
      console.error('type error');
      this.commonService.notify('warning', this.constant.notifyText.typeError);

      return false;
    }

    var res = new FormData();
    res.append(this.name, file);

    return res;
  }
}


const modules = require('../../utils/modules');

module.exports = modules.get(moduleName, config.names.components)
  .directive(moduleName, modules.getDdo(moduleName, Controller, false, bind));
