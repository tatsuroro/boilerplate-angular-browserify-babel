'use strict';

const moduleName = 'offset';

/*@ngInject*/
function offset() {
  return function(input, start) {
    if (input !== undefined) {
      start = parseInt(start, 10);
      return input.slice(start);
    }
  };
}

module.exports = require('../utils/modules')
  .get(moduleName, config.names.general)
  .filter(moduleName, offset);
