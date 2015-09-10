'use strict';

var gulp = require('gulp');

module.exports = gulp.task('copy', function() {
  gulp.src(config.paths.src.clientFiles)
    .pipe(gulp.dest(config.paths.dest.release.index));

  gulp.src(config.paths.src.server, {base: 'server'})
    .pipe(gulp.dest(config.paths.dest.release.server));
});
