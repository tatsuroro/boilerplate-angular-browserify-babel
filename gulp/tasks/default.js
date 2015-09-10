'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = gulp.task('default', function() {
  if (release) {
    runSequence(
      'clean',
      ['copy', 'index', 'styles', 'stylesVendor', 'images', 'assets', 'templates', 'lint'],
      'browserify',
      'minify'
    );
  } else {
    runSequence(
      'clean',
      'inject',
      ['index', 'styles', 'stylesVendor', 'images', 'assets', 'templates', 'lint'],
      ['watchify', 'watch', 'serve']
    );
  }
});
