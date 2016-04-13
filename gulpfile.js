var gulp = require('gulp')
var webserver = require('gulp-webserver')
var stylus = require('gulp-stylus')
var concat = require('gulp-concat')
var copy = require('gulp-copy')
var concatCss = require('gulp-concat-css')
var nib = require('nib')
var minify = require('gulp-minify-css')
var uglify = require('gulp-uglify')

gulp.task('server', function() {
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('copy', function() {

  gulp.src([
      './app/views/*.html',
      './app/views/**/*.html',
      './app/components/*.html',
      './app/components/**/*.html',
      './app/lang/*.json'
    ])
    .pipe(copy('build'));

})

gulp.task('stylus', function() {

  gulp.src([
      './app/styles/*.styl',
      './app/styles/**/*.styl',
      './app/views/*.styl',
      './app/views/**/*.styl',
      './app/components/*.styl',
      './app/components/**/*.styl',
    ])
    .pipe(stylus({
      use: nib(),
      'include css': true,
    }))
    .pipe(concat('main.css'))
    .pipe(minify())
    .pipe(gulp.dest('./build/css'))

})

gulp.task('css', function() {

  gulp.src([
      './bower_components/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(concatCss('vendor.css'))
    .pipe(minify())
    .pipe(gulp.dest('./build/css'))

})

gulp.task('vendorjs', function() {

  gulp.src([
      './bower_components/jquery/dist/jquery.min.js',
      './bower_components/bootstrap/dist/js/bootstrap.min.js',
      './bower_components/angular/angular.min.js',
      './bower_components/angular-route/angular-route.min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./build/js'))

})

gulp.task('js', function() {

  gulp.src([
      './app/**/*.js',
    ])
    .pipe(concat('main.js'))
    .pipe(uglify({
      mangle : false
    }))
    .pipe(gulp.dest('./build/js'))

})

gulp.task('build', ['vendorjs' ,'js', 'css' , 'stylus' , 'copy'])

gulp.task('watch', function() {

  gulp.watch([
  	'./app/**/*.js'
  ],[
  	'js'
  ])

  gulp.watch([
    './app/styles/*.styl',
    './app/styles/**/*.styl',
    './app/views/*.styl',
    './app/views/**/*.styl',
    './app/components/*.styl',
    './app/components/**/*.styl',
  ],[
  	'stylus'
  ])

  gulp.watch([
      './app/views/*.html',
      './app/views/**/*.html',
      './app/components/*.html',
      './app/components/**/*.html',
      './app/lang/*.json'
  ],[
  	'copy'
  ])

})

gulp.task('default', ['server', 'watch'])
