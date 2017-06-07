var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('default', (['sass']));