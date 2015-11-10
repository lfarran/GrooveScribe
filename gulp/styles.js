
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

    // TODO: LBF 11/9/15 - complete - minify css
    // Protip: until gulpjs 4.0 is released, you can use gulp-plumber to prevent stops on errors
    .pipe(plugins.plumber())

    // convert SASS into css file
    //.pipe(plugins.sass({ outputStyle: 'compressed' }).on('error', plugins.sass.logError))
    .pipe(plugins.concat("app.min.css"))
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

    // convert SASS into css file
    //.pipe(plugins.sass({ outputStyle: 'compressed' }).on('error', plugins.sass.logError))
    .pipe(plugins.concat("lib.min.css"))

    .pipe(gulp.dest('dist/css'))
    .pipe(plugins.duration('styles:lib duration'));
});

gulp.task('styles:all', function (cb) {
  runSequence(['styles:app', 'styles:lib'], cb);
});
