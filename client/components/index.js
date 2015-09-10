'use strict';

module.exports = angular
  .module(config.names.components, [
     require('./navbar').name,
     require('./sidebar').name,
     require('./header').name,
     require('./tabs').name,
     require('./clientSelect').name,
     require('./accountSelect').name,
     require('./paginatedTable').name,
     require('./uploader').name
  ]);
