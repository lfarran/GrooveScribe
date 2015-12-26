
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});

/**
* Copies app index.html file into dist/ build directory
 * and minifies the HTML
*/
gulp.task('copy:index-html', function() {
  gulp.src(['./index.html'])
    .pipe(plugins.minifyHtml())
    .pipe(gulp.dest('./dist'));
});

/**
 * Copies soundfont folder into dist/ build directory
 */
gulp.task('copy:soundfont', function() {
  gulp.src(['./soundfont/**/{,*/}*'])
    .pipe(gulp.dest('./dist/soundfont'));
});

/**
 * Copies and minifies JavaScript
 */
gulp.task('copy:js', function() {
  gulp.src(['./js/**/{,*/}*.js'])
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./dist/js'));
});

/**
 * Copies and minifies css
 * @TODO local font or CDN?
 */
gulp.task('copy:css', function() {
  gulp.src(['./css/*.css', '!./css/latoFont.css'])
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

/**
 * Copies and Font Awesome
 * @TODO Bower Component Font Awesome
 */
gulp.task('copy:font-awesome', function() {
  gulp.src(['!./font-awesome/4.3.0/css/font-awesome.css',
            './font-awesome/**/{,*/}*',
            '!./font-awesome/4.3.0/less/*',
            '!./font-awesome/4.3.0/less',
            '!./font-awesome/4.3.0/scss/*',
            '!./font-awesome/4.3.0/scss',
            '!./font-awesome/4.3.0/HELP-US-OUT.txt'])
    .pipe(gulp.dest('./dist/font-awesome'));
});

/**
 * Copies and minifies MIDI.js
 */
gulp.task('copy:MIDI.js', function() {
  gulp.src(['./MIDI.js/**/{,*/}*'])
    //.pipe(plugins.uglify())
    .pipe(gulp.dest('./dist/MIDI.js'));
});



