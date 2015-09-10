'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserifyShim = require('browserify-shim');
var ngannotate = require('browserify-ngannotate');

module.exports = gulp.task('browserify', function() {
  return browserify({
      entries: [config.paths.src.modules]
    })
    .transform(babelify)
    .transform(browserifyShim)
    .transform(ngannotate)
    .bundle()
    .pipe(source(config.filenames.release.scripts))
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
