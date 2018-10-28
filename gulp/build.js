'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./../gulp.filelist.js');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function(cb) {
  runSequence('imagemin', ['copy:index-html', 'copy:js', 'copy:css', 'copy:font-awesome', 'copy:MIDI.js', 'copy:soundfont', /*'minify:MIDI'*/], cb);
});

/**
 * Concats and minifies MIDI.js
 */
/*gulp.task('minify:MIDI', function () {
  gulp.src(files.js_lib_src)
    .pipe(plugins.concat('MIDI.JS.min.js'))
    .pipe(plugins.uglify())
    //.pipe(gulp.dest('dist/MIDI.js/js/midi/'));
    .pipe(gulp.dest('dist/MIDI.js/'));
});*/



