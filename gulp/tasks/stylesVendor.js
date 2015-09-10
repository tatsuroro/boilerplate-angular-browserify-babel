'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var csso = require('gulp-csso');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

module.exports = gulp.task('stylesVendor', function() {
  gulp.src(config.paths.src.stylesVendor)
    .pipe(plumber())
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, rename(config.filenames.release.stylesVendor), rename(config.filenames.build.stylesVendor)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
