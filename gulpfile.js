'use strict';

var gulp = require('gulp'),
    gp = require('gulp-load-plugins')();
    

gulp.task('pug', function (){
    return gulp.src('src/pug/pages/*.pug')
    .pipe(gp.pug({
        pretty:true
    }))
    .pipe(gulp.dest('build'));
})

gulp.task('sass', function (){
    return gulp.src('src/static/scss/*.scss')
    .pipe(gp.sass({}))
    .pipe(gp.csso())
    .pipe(gulp.dest('build/static/css/'));
})
