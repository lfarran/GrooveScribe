'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./../gulp.filelist.js');
var runSequence = require('run-sequence');

// Js-Libs
gulp.task('js:lib', function () {
  gulp.src(files.js_lib_src)
    .pipe(plugins.concat('lib.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js:app', ['js:lint'], function () {
  return gulp.src(files.app_files())
    .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js:all', function (cb) {
  runSequence(['js:lib', 'js:app'], cb);
});

gulp.task('build', ['clean'], function(cb) {
  runSequence('imagemin', ['copy:index-html', 'copy:soundfont','copy:groove-debug-css','copy:grooveDB-authoring-css',
                           'js:all',
                           'styles:all',
                           'fonts:all'], cb);
});



