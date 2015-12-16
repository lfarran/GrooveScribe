
'use strict';

var gulp = require('gulp');
var del = require('del');

// Clean
gulp.task('clean', function (cb) {
    return del(['./dist'], cb);
});

gulp.task('clean:gzip', function (cb) {
    return del(['./dist-gzip'], cb);
});
