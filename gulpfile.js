/**
 *
 *  Ruben Pereira | Designer & Front-end Developer
 *  Copyright 2016 portfolio All rights reserved.
 */

var gulp      = require('gulp'),
    sass      = require('gulp-ruby-sass'),
    prefix    = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    refresh   = require('gulp-livereload'),
    server    = require('tiny-lr')(),
    connect = require('gulp-connect'),
    htmlSources = ['**/*.html']
 
gulp.task('compileStyles', function() {
    gulp.src('css/style.scss')
    .pipe(sass({
        noCache      : true,
        precision    : 4,
        unixNewlines : true
    }))
    .pipe(prefix('last 3 version'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'))
    .pipe(refresh(server));
});

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest(outputDir))
});

gulp.task('connect', function() {
  connect.server({
    port: 8000,
    root: '.',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('default', ['html', 'connect']);

