
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});

/**
* Copies app index.html file into dist/ build directory
*/
gulp.task('copy:index-html', function() {
  gulp.src(['./app/index.html'])
    .pipe(gulp.dest('./dist'));
});

/**
 * Copies app groove_debug.css file into dist/css/ build directory
 */
gulp.task('copy:groove-debug-css', function() {
  gulp.src(['./app/css/groove_debug.css'])
    .pipe(gulp.dest('./dist/css'));
});

/**
 * Copies app grooveDB_authoring.css file into dist/css/ build directory
 */
gulp.task('copy:grooveDB-authoring-css', function() {
  gulp.src(['./app/css/grooveDB_authoring.css'])
    .pipe(gulp.dest('./dist/css'));
});

/**
 * Copies soundfont folder into dist/ build directory
 */
gulp.task('copy:soundfont', function() {
  gulp.src(['./app/soundfont/**/{,*/}*'])
    .pipe(gulp.dest('./dist/soundfont'));
});



