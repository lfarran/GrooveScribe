'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var runSequence = require('run-sequence');

gulp.task('fonts:fontawesome', function () {
  // fonts
  gulp.src([
    './bower_components/fontawesome/fonts/*.*'
  ])
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(plugins.duration('fonts:fontawesome'));
});

gulp.task('fonts:gstatic-lato', function () {
  // fonts
  gulp.src([
      './app/fonts/lato/*.*'
    ])
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(plugins.duration('fonts:gstatic-lato'));
});

gulp.task('fonts:all', function (cb) {
  runSequence(['fonts:fontawesome', 'fonts:gstatic-lato'], cb);
});
