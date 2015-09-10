'use strict';

var gulp = require('gulp');
var gls = require('gulp-live-server');

module.exports = gulp.task('serve', function (next) {
  var server = gls(config.paths.server, {debug: true});
  server.start();

  gulp.watch(config.paths.src.livereload, function() {
    server.notify.apply(server, arguments);
  });
});
