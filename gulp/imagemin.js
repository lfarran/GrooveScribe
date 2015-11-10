'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var files = require('./../gulp.filelist.js');

gulp.task('imagemin', function() {
  gulp.src(files.image_src())
    .pipe(plugins.imagemin())
    .pipe(plugins.flatten()) // put all of the images in the root dist/images directory
    .pipe(gulp.dest('dist/images'))
    .pipe(plugins.duration('imagemin'));
});
