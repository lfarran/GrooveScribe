'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./../gulp.filelist.js');

gulp.task('watch', function () {

  console.log('start watch');

  // Watchfiles
  gulp.watch(files.app_files(), ['copy:js']);
  gulp.watch(files.css_src(), ['copy:css']);
  gulp.watch(files.js_lib_src, ['copy:MIDI.js', 'copy:js']);
  gulp.watch('*.html', ['copy:index-html']);
});

gulp.task('connect', function () {
  console.log('start connect');
  plugins.connect.server({
    // Switching to root - something in build process breaks Groove Scribe
    root: './dist',
    // root: './',
    port: 8889,
    livereload: true
  });
});

gulp.task('dev', ['watch', 'connect'],
  function () {
    //
  });


