var gulp =    require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'js',
        livereload: true,
        port: 3333
    });
});
gulp.task('html', function () {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('css', function () {
    return gulp.src('js/*.css')
      .pipe(connect.reload());
});



gulp.task('watch',function(){
    gulp.watch('js/*.html', ['html']);
    gulp.watch('js/*.css', ['css']);
});


gulp.task('default', ['watch','connect','html','css']);
