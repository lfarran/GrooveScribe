
'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./../gulp.filelist.js');
var runSequence = require('run-sequence');

/**
 * Convert SASS layout files (styling for sizes, locations, layout, etc.)
 * into an minified app.min.css files for the dist/css build directory
 */
gulp.task('styles:app', function () {
  gulp.src(files.css_src())

    // Protip: until gulpjs 4.0 is released, you can use gulp-plumber to prevent stops on errors
    .pipe(plugins.plumber())
    .pipe(plugins.concat("app.min.css"))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('dist/css'))

    // time how long it takes
    .pipe(plugins.duration('styles:sass:app duration'));
});

/**
 * Convert 3rd party styles into lib.min.css file
 */
gulp.task('styles:lib', function () {
  gulp.src(files.css_lib_files())

    // Protip: until gulpjs 4.0 is released, you can use gulp-plumber to prevent stops on errors
    .pipe(plugins.plumber())
    .pipe(plugins.concat("lib.min.css"))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(plugins.duration('styles:lib duration'));
});

/**
 * Copies and minifies app groove_debug.css file into dist/css/ build directory
 */
gulp.task('styles:groove-debug-css', function() {
  gulp.src(['./app/css/groove_debug.css'])
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

/**
 * Copies and minifies app grooveDB_authoring.css file into dist/css/ build directory
 */
gulp.task('styles:grooveDB-authoring-css', function() {
  gulp.src(['./app/css/grooveDB_authoring.css'])
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

/**
 * Copies and minifies app grooveDB_modal.css file into dist/css/ build directory
 */
gulp.task('styles:grooveDB-modal-css', function() {
  gulp.src(['./app/css/grooveDB_modal.css'])
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('styles:all', function (cb) {
  runSequence(['styles:app', 'styles:lib', 'styles:groove-debug-css', 'styles:grooveDB-authoring-css', 'styles:grooveDB-modal-css'], cb);
});
