var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');

gulp.task('compile-less', function () {
    return gulp.src(['./less/_fonts.less','./less/**/*.less'])
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('code', function () {
    return gulp.src('./*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
    browserSync({ 
        server: { 
            baseDir: './'
        },
        browser: 'chrome',
        notify: false
    });
});

gulp.task('watch-less', function() {
    gulp.watch('./less/**/*.less' , gulp.parallel('compile-less'));
    gulp.watch('./*.html', gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watch-less'));



