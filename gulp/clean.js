
'use strict';

var gulp = require('gulp');
var del = require('del');

// Clean
gulp.task('clean', function (cb) {
    return del(['./dist'], cb);
});

