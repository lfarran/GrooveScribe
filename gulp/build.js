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
  runSequence('imagemin', ['copy:index-html', 'copy:soundfont',
                           'js:all',
                           'styles:all',
                           'fonts:all'], cb);
});

/**
 * Run Gulp clean:gzip and Gulp build before running this
 */
gulp.task('build:gzip', function(cb) {
  // compress CSS & JavaScipt files
  runSequence(['css-gzip', 'js-gzip', 'deploy-image-copy', 'deploy-fonts-copy', 'soundfonts:gzip', 'deploy-index'], cb);
});

// Gzip files
gulp.task('css-gzip', function(){
  return gulp.src('./dist/css/*.css')
    .pipe(plugins.gzip({ append: false }))
    .pipe(gulp.dest('./dist-gzip/css'))
});

gulp.task('js-gzip', function(){
  return gulp.src('./dist/js/**/*.js')
    .pipe(plugins.gzip({ append: false }))
    .pipe(plugins.duration('js-gzip duration'))
    .pipe(gulp.dest("./dist-gzip/js"));
});

gulp.task('deploy-image-copy', function() {
  gulp.src(['./dist/images/**/'])
    .pipe(plugins.gzip({ append: false }))
    .pipe(plugins.duration('deploy-image-copy duration'))
    .pipe(gulp.dest('./dist-gzip/images'));
});

gulp.task('deploy-fonts-copy', function() {
  gulp.src(['./dist/fonts/**/'])
    .pipe(plugins.gzip({ append: false }))
    .pipe(plugins.duration('deploy-fonts-copy duration'))
    .pipe(gulp.dest('./dist-gzip/fonts'));
});

gulp.task('soundfonts:gzip', function() {
  gulp.src(['./dist/soundfont/**/'])
    .pipe(plugins.gzip({ append: false }))
    .pipe(plugins.duration('soundfonts:gzip duration'))
    .pipe(gulp.dest('./dist-gzip/soundfont'));
});

gulp.task('deploy-index', function() {
  gulp.src(['./dist/index.html'])
    /*.pipe(plugins.minifyHtml({
      empty: true,
      spare: true,
      quotes: true,
      comments: true
    }))*/
    .pipe(plugins.duration('deploy-index duration'))
    .pipe(gulp.dest('./dist-gzip'));
});



