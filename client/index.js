'use strict';

global.config = require('./config');

// browserify-shim dependencies (can be edited in package.json)
require('lodash');

require('angular');

require('angular-cookies');
require('angular-sanitize');
require('angular-animate');
require('restangular');
require('angular-bootstrap-npm');
require('angular-ui-router');
require('ui-select');
require('angularjs-toaster');

require('./components/loadingBar/loadingBar');

// app entry point
require('./app');
