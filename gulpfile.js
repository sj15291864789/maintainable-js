var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    KarmaServer = require('karma').Server,
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    livereload = require('gulp-livereload'),
    opn = require('opn'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber');


gulp.task('test', function (done) {
    new KarmaServer({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});

gulp.task('js', function () {
    return gulp.src(['src/*.js', 'spec/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function () {
    return browserify('src/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('watch', ['browserify'], function () {
    livereload.listen(35729);
    var watch = gulp.watch(['src/**', 'index.html'], ['reload']);
});

gulp.task('reload', ['browserify'], function() {
    gulp.src(['index.html', 'src/css/*.css', 'build/js/bundle.js'])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter())
        .pipe(livereload())
        .pipe(browserSync.stream());
});

gulp.task('bs', ['browserify'], function() {
    var files = [
        'index.html',
        'build/js/bundle.js',
        'src/css/*.css'
    ];

    browserSync.init(files, {
        server:  '.'
    });
});

//gulp.task('default', ['js', 'test']);
gulp.task('default', ['watch', 'bs']);
