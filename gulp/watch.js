'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./../gulp.filelist.js');

gulp.task('watch', function () {

  console.log('start watch');
  // Watchfiles
  gulp.watch('bower_components/**/*.js', ['js:lib']);
  gulp.watch(files.app_files(), ['js:app']);
  //gulp.watch(files.css_lib_files(), ['sass:lib']);
  //gulp.watch('app/**/*.scss', ['styles:sass:app']);
  gulp.watch('*.html', ['copy-index-html']);
  gulp.watch('gulpfile.js', ['js:all', 'styles:all']);

  //// Watch image files
  gulp.watch('app/images/**/*', ['images']);

});

gulp.task('connect', function () {
  console.log('start connect');
  plugins.connect.server({
    root: './dist',
    port: 8889,
    livereload: true
  });
});

gulp.task('dev', ['watch', 'connect'],
  function () {
    //
  });


