/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    del = require('del'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    ngAnnotate = require('gulp-ng-annotate'),
    jsifyTemplates = require('gulp-jsify-html-templates'),
    css2js = require('gulp-css2js'),
    addSrc = require('gulp-add-src'),
    order = require('gulp-order'),
    gulpsync = require('gulp-sync')(gulp);

// define the default task and add the watch task to it
gulp.task('default', ['build', 'watch']);

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    gulp.watch('src/**/*', ['build']);
});

gulp.task('jshint', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(css2js())
        .pipe(rename("styles.js"))
        .pipe(gulp.dest('dist/temp/'));
});

gulp.task('build-js', function (cb) {
    return gulp.src('src/templates/*.html')
        .pipe(jsifyTemplates())
        .pipe(addSrc('src/js/ionic-validation-directive.js'))
        .pipe(ngAnnotate())
        .pipe(order(['src/templates/*.html', 'src/js/ionic-validation-directive.js']))
        .pipe(concat('ionic-validation-directive.js'))
        .pipe(gulp.dest('dist/temp/'));
})

gulp.task('install-to-example', function () {
    del(['./ValidationItemDirectiveExampleApp/www/lib/ionic-validation-directive']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));

        return gulp.src(['*src/**/*', '*dist/**/*', './*.*'])
            .pipe(gulp.dest('./ValidationItemDirectiveExampleApp/www/lib/ionic-validation-directive'));
    });
});

gulp.task('del-temp', function () {
    del(['dist/temp']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});

gulp.task('make-bundle', gulpsync.sync(['build-css', 'build-js']), function () {
    return gulp.src(['dist/temp/styles.js', 'dist/temp/ionic-validation-directive.js'])
    // .pipe(order(['dist/temp/styles.js', 'dist/temp/ionic-validation-directive.js']))
        .pipe(concat('ionic-validation-directive.bundle.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});


gulp.task('build', gulpsync.sync(['jshint', 'make-bundle', 'del-temp', 'install-to-example']));
