'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = gulp.task('watch', function() {
  watch(config.paths.src.scripts, function(event){
	gulp.start("lint");
  });
  watch(config.paths.src.index, function(event){
	gulp.start("index");
  });
  watch(config.paths.src.templates, function(event){
	gulp.start("templates");
  });
  watch(config.paths.src.styles, function(event){
	gulp.start("styles");
  });
  watch(config.paths.src.stylesGlob, function(event){
	gulp.start("styles");
  });
});
