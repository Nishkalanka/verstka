module.exports = function () {
    $.gulp.task('sass', function (){
        return $.gulp.src('src/static/scss/*.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass({}))
        .pipe($.gp.autoprefixer({
            browsers: ['last 10 versions']
        }))
        .pipe($.gp.csso())
        .pipe($.gp.sourcemaps.write())
        .on("error", $.gp.notify.onError({
            title: "Error"
        }))
        .pipe($.gulp.dest('dist/static/css/'))
        .pipe($.browserSync.reload({
            stream:true
        }));
    });
}
