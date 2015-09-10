'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

var sassOption = {
  includePaths: [
    'node_modules',
    config.paths.src.app,
    config.paths.src.components
  ],
};

module.exports = gulp.task('styles', function() {
  gulp.src(config.paths.src.styles)
    .pipe(sass(sassOption).on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer('last 1 version'))
    .pipe(gulpif(release, csso()))
    .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
    .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
