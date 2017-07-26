var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'))
});


gulp.task('minifyjs', function() {
  gulp.src(['node_modules/angular/angular.js','node_modules/angular-ui-router/release/angular-ui-router.min.js','app/**/*.js'])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
});


//Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.sass',['styles','minifyjs']);
    gulp.watch('app/**/*.js',['minifyjs']);
});



// gulp.task('minify', function(){
// 	gulp.src('js/script.js').pipe(uglify()).pipe(gulp.dest('build'))
// })

