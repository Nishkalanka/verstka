module.exports = function(){
    $.gulp.task('sync', function() {
        $.browserSync.init({
            server: {
                baseDir: "./dist"
            }
        });
    });
}