var gulp = require('gulp');
var runSequence = require('run-sequence');

require('require-dir')('./gulp');

gulp.task('default',
  function (cb) {
    runSequence('build', 'dev', cb);
  });

