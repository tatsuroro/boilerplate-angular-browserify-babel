'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var naturalSort = require('gulp-natural-sort');

module.exports = gulp.task('inject', function() {
  gulp.src(config.paths.src.styles)
    .pipe(inject(gulp.src(config.paths.src.injectScss, {read: false}).pipe(naturalSort()), {
      starttag: '// injector',
      endtag: '// endinjector',
      transform: function(filePath) {
        filePath = filePath.replace('/client/app/', '');
        filePath = filePath.replace('/client/components/', '');
        return '@import \'' + filePath + '\';';
      },
    }))
    .pipe(gulp.dest(config.paths.src.app));
});
