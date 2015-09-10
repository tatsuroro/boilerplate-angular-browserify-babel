'use strict';

const moduleName = 'front';

/* @ngInject */
function Configuration($stateProvider) {
  // feature Base Controller
  $stateProvider
    .state('front', {
      url: '/',
      onEnter: /* @ngInject */ function($rootScope) {
        $rootScope.moduleName = moduleName;
      },
      views: {
        'contentHeader@': {
          template: '<id-header label="'+ moduleName + '"></id-header>',
        },
        'contentBody@': {
          templateUrl: moduleName + '/' + moduleName + '.html',
          controller: 'FrontController',
          controllerAs: moduleName
        }
      }
    });

}


module.exports = require('../../utils/modules')
  .get(moduleName, config.names.contents)
  .config(Configuration)
  .controller('FrontController', require('./front.controller'));
