
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});

/**
* Copies app index.html file into dist/ build directory
*/
gulp.task('copy:index-html', function() {
  gulp.src(['./app/index.html'])
    .pipe(plugins.minifyHtml())
    .pipe(gulp.dest('./dist'));
});

/**
 * Copies soundfont folder into dist/ build directory
 */
gulp.task('copy:soundfont', function() {
  gulp.src(['./app/soundfont/**/{,*/}*'])
    .pipe(gulp.dest('./dist/soundfont'));
});



