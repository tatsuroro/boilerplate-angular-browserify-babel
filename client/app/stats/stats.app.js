'use strict';

const moduleName = 'stats';

/* @ngInject */
function Configuration($stateProvider, $urlRouterProvider) {
  // feature Base Controller
  $stateProvider
    .state('media.stats', {
      url: '/stats',
      onEnter: /* @ngInject */ function($rootScope) {
        $rootScope.moduleName = moduleName;
      },
      views: {
        'contentHeader@': {
          template: '<id-header label="'+ moduleName + '"></id-header>',
        },
        'contentBody@': {
          template: '<stats-form options="stats.options"></stats-form>',
          controller: 'StatsController',
          controllerAs: moduleName
        }
      },
      data : {
        allowMedia : ['facebook','twitter'] 
      }
    });

  // sub Components
  $stateProvider
    .state('media.stats.table', {
      url: '/table',
      views: {
        'contentBody@': {
          template: '<stats-table options="stats.options"></stats-table>'
        }
      },
      data : {
        allowMedia : ['facebook','twitter'] 
      }
    });

  $stateProvider
    .state('media.stats.retrieve', {
      url: '/retrieve',
      views: {
        'contentHeader@': {
          template: '<id-header label="stats-retrieve" tabs="stats.retrieve.header.tabs"></id-header>',
          controller: 'StatsController',
          controllerAs: moduleName
        },

        'contentBody@': {
          template: '<stats-retrieve options="stats.options"></stats-retrieve>',
        }
      },
      data : {
        allowMedia : ['facebook','twitter'] 
      }
    });

  $stateProvider
    .state('media.stats.retrieve.history', {
      url: '/history',
      views: {
        'contentBody@': {
          template: '<stats-retrieve-history options="stats.options"></stats-retrieve-history>',
        }
      },
      data : {
        allowMedia : ['facebook','twitter'] 
      }
    });
}


const requires = [
  require('./form').name,
  require('./table').name,
  require('./retrieve').name,
  require('./retrieve/history').name
];

module.exports = require('../../utils/modules')
  .get(moduleName, config.names.contents, requires)
  .config(Configuration)
  .service('statsService', require('./stats.service'))
  .controller('StatsController', require('./stats.controller'));
