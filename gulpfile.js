var gulp = require('gulp');
var clean = require('gulp-clean');
var print = require('gulp-print');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var babelify = require('babelify');



gulp.task('watch', function () {
    gulp.watch('app/**/*.*', ['build']);
});

gulp.task('clean', function () {
   return gulp
       .src('build/*', {read: false})
       .pipe(print())
       .pipe(clean());
});

gulp.task('js', ['clean'] ,function () {

    return browserify({entries: 'app/app.jsx', extensions: ['.jsx'], debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build'));
});


gulp.task('build', ['js'], function(){
    return gulp.src(['app/**/*.html', 'app/**/*.css'])
        .pipe(print())
        .pipe(gulp.dest('build'));
});

gulp.task('serve', ['watch'], function() {
    gulp.src('build')
        .pipe(webserver({open: true}));
});
