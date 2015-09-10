'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');

module.exports = gulp.task('watchify', function() {
  var bundler = browserify({
    // required watchify args
    cache: {}, packageCache: {},
    // Browserify options
    entries: [config.paths.src.modules],
    debug: true
  });

  var w = watchify(bundler);

  w.on('update', rebundle);
  w.on('log', gutil.log);

  function rebundle() {
    return w.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(plumber())
      .pipe(source(config.filenames.build.scripts))
      .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  return rebundle();
});
