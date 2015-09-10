'use strict';

class commonService {
  /*@ngInject*/
  constructor ($state, $stateParams, Restangular, toaster) {
    this.$state       = $state;
    this.$stateParams = $stateParams;
    this.Restangular  = Restangular;
    this.toaster      = toaster;

  }

  getMethod() {
    return (this.$state.includes('**.update')) ? 'PUT' : 'POST';
  }

  notify(type, title, options = null) {
    var params = {
      type: type,
      title: title
    };

    if (_.isNull(options)) params.showCloseButton = true;

    if (options) {
      _.merge(params, options);

      console.log(params);
    }

    this.toaster.pop(params);
  }
}


module.exports = commonService;
