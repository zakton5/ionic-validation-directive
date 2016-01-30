/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    ngAnnotate = require('gulp-ng-annotate'),
    jsifyTemplates = require('gulp-jsify-html-templates'),
    addSrc = require('gulp-add-src'),
    order = require('gulp-order');

// create a default task and just log a message
gulp.task('default', function () {
    return gutil.log('Gulp is running!')
});

// define the default task and add the watch task to it
gulp.task('default', ['build', 'watch']);

// configure the jshint task
gulp.task('jshint', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(cssnano())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build-js', function () {
    return gulp.src('src/templates/*.html')
        .pipe(jsifyTemplates())
        .pipe(addSrc('src/js/ionic-validation-directive.js'))
        .pipe(ngAnnotate())
        .pipe(order(['src/templates/*.html', 'src/js/ionic-validation-directive.js']))
        .pipe(concat('ionic-validation-directive.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify({ mangle: false, compress: { side_effects: false } }))
        .pipe(gulp.dest('dist/js'));
});

// gulp.task('build-templates', function () {
//     return gulp.src('src/templates/*.html')
//         .pipe(gulp.dest('dist/templates'))
// });

gulp.task('build', ['jshint', 'build-css', 'build-js', 'install-to-example'], function () {
    
});

gulp.task('install-to-example', function () {
    return gulp.src(['*src/**/*', '*dist/**/*', './*.*'])
        .pipe(gulp.dest('./ValidationItemDirectiveExampleApp/www/lib/ionic-validation-directive'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    //gulp.watch('src/js/**/*.js', ['build-js']);
    //gulp.watch('src/scss/**/*.scss', ['build-css']);
    gulp.watch('src/**/*', ['build']);
});