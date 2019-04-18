var gulp = require('gulp');
//var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');

var srcStyle = './css/**/*.css';
var srcJS ='./js/**/*.js';
var srcImage = './images/**/*.*';
var srcHTML = './*.html';

var styleURL = './dist/css/**/*.css';
var jsURL ='./dist/js/**/*.js';
var imageURL = './dist/images/**/*.*';
var htmlURL= './dist/*.html';

gulp.task('browser-sync', function(){
  browserSync.init({
    server: {
      baseDir: './dist'
    },
})
});

function copyhtml () {
   return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({stream: true}));
 }

 function copyImage () {
  return gulp.src('./src/images/*')
       .pipe(gulp.dest('./dist/images/'))
       .pipe(browserSync.reload({stream: true}));
}

 function copyCSS () {
  return gulp.src('./src/css/*.css')
       .pipe(gulp.dest('./dist/css/'))
       .pipe(browserSync.reload({stream: true}));
}

function copyJS () {
  return gulp.src('./src/js/*.js')
       .pipe(gulp.dest('./dist/js/'))
       .pipe(browserSync.reload({stream: true}));
}

function watchhtml () {
  return gulp.watch("./src/*.html", gulp.parallel(copyhtml));
}

function watchCSS () {
 return gulp.watch("./src/css/*.css", gulp.series(copyCSS, function(done){
   browserSync.reload();
   done();
 }));
}

function watchJS () {
 return gulp.watch("./src/js/*.js", gulp.parallel(copyJS));
}

function watchImage () {
  return gulp.watch("./src/images/*", gulp.parallel(copyImage));
}

gulp.task('copy', gulp.parallel(copyCSS, copyJS, copyhtml, copyImage));
gulp.task('watch', gulp.parallel( watchCSS, watchhtml, watchJS, watchImage))
gulp.task('default',gulp.parallel('browser-sync','copy','watch'));
