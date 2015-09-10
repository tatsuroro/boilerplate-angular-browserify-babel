'use strict';

const moduleName = 'common';

/* @ngInject */
function Configuration() {
}

module.exports = require('../../utils/modules')
  .get(moduleName, config.names.contents)
  .config(Configuration)
  .service('clientService', require('./client.service'))
  .service('commonService', require('./common.service'));
