var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


gulp.task('serve', ['sass'], function () {

    // Serve files from the root of this project
    browserSync.init({
        files:['src/**/*.*'],
        server: {
            baseDir: "src",
            index: "index.html"
        }
    });
    gulp.watch("src/**/*.scss", ['sass']);
});

gulp.task('sass', function() {
    return gulp.src("src/styles/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("src/styles/css"))
        .pipe(browserSync.stream());
});
