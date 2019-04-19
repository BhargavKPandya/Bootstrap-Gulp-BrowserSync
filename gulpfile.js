var gulp = require('gulp');
//var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');


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
  return gulp.src('./src/images/*', {since: gulp.lastRun(copyImage)})
       .pipe(gulp.dest('./dist/images/'))
       .pipe(browserSync.reload({stream: true}));
}

 function copyCSS () {
  return gulp.src('./src/css/*.css', {since: gulp.lastRun(copyCSS)})
       .pipe(gulp.dest('./dist/css/'))
       .pipe(browserSync.reload({stream: true}));
}

function copyJS () {
  return gulp.src('./src/js/*.js', {since: gulp.lastRun(copyJS)})
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
