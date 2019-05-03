/**
 * File name: gulpfile.js
 * Author: Bhargav Pandya
 * Version: 1.2
 * Description: Delete files from build folder during watch task, Delete build Directory at initial Gulp task 
 */

var gulp = require('gulp');
//var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cache = require('gulp-cache');
var del = require('del');
var path = require('path');
//const htmlmin = require('gulp-htmlmin');
const dir = {
  src: {
    path: "./src/",
    images: "./src/images/",
    css: "./src/css/",
    js: "./src/js/",
    dataFiles: "./src/dataFiles/"
  },
  dist: {
    path: "./dist/",
    images: "./dist/images/",
    css: "./dist/css/",
    js: "./dist/js/",
    dataFiles: "./dist/dataFiles/"
  }
};

const extension = {
  template: "*.html",
  style: "*.css",
  image: "*",
  script: "*.js",
  data: "*"
};

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
});

function reload() {
  browserSync.reload();
}

function cleanDist(){
  return del(`${dir.dist.path}`);
}

function copyhtml() {
  return gulp.src(`${dir.src.path + extension.template}`)
    //.pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(`${dir.dist.path}`))
    .pipe(browserSync.reload({ stream: true }));
}

function copyImage() {
  return gulp.src(`${dir.src.images + extension.image}`, { since: gulp.lastRun(copyImage) })
    .pipe(gulp.dest(`${dir.dist.images}`))
    .pipe(browserSync.reload({ stream: true }));
}

function copyCSS() {
  return gulp.src(`${dir.src.css + extension.style}`, { since: gulp.lastRun(copyCSS) })
    .pipe(gulp.dest(`${dir.dist.css}`))
    .pipe(browserSync.reload({ stream: true }));
}

function copyJS() {
  return gulp.src([
    `${dir.src.js + "jquery-3.3.1.min.js"}`,
    `${dir.src.js + "popper.min.js"}`,
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    `${dir.src.js + "product.js"}`,
    `${dir.src.js + "slider.js"}`,
    `${dir.src.js + "smoothscroll.js"}`
    
  ])
    .pipe(concat('script.js'))
    .pipe(gulp.dest(`${dir.dist.js}`))
    .pipe(browserSync.reload({ stream: true }));
}

function copyDataFiles() {
  return gulp.src(`${dir.src.dataFiles + extension.data}`, { since: gulp.lastRun(copyDataFiles) })
    .pipe(gulp.dest(`${dir.dist.dataFiles}`))
    .pipe(browserSync.reload({ stream: true }));
}

function watchhtml() {
  return gulp.watch(`${dir.src.path + extension.template}`, gulp.parallel(copyhtml));
}

function watchCSS() {
  return gulp.watch(`${dir.src.css + extension.style}`, gulp.series(copyCSS, function (done) {
    browserSync.reload();
    done();
  }))
    .on('unlink', function (filepath) {
      var filePathFromSrc = path.relative(path.resolve(`${dir.src.css}`), filepath);
      var destFilePath = path.resolve(`${dir.dist.css}`, filePathFromSrc);
      del.sync(destFilePath);
      reload();
    });
}

function watchJS() {
  return gulp.watch(`${dir.src.js + extension.script}`, gulp.parallel(copyJS))
    .on('unlink', function (filepath) {
      var filePathFromSrc = path.relative(path.resolve(`${dir.src.js}`), filepath);
      var destFilePath = path.resolve(`${dir.dist.js}`, filePathFromSrc);
      del.sync(destFilePath);
      reload();
    });
}

function watchImage() {
  return gulp.watch(`${dir.src.images + extension.image}`, gulp.parallel(copyImage))
    .on('unlink', function (filepath) {
      var filePathFromSrc = path.relative(path.resolve(`${dir.src.images}`), filepath);
      var destFilePath = path.resolve(`${dir.dist.images}`, filePathFromSrc);
      del.sync(destFilePath);
      reload();
    });
}

function watchDataFiles() {
  return gulp.watch(`${dir.src.dataFiles+ extension.data}`, gulp.parallel(copyDataFiles))
    .on('unlink', function (filepath) {
      var filePathFromSrc = path.relative(path.resolve(`${dir.src.dataFiles}`), filepath);
      var destFilePath = path.resolve(`${dir.dist.dataFiles}`, filePathFromSrc);
      del.sync(destFilePath);
      reload();
    });
}

gulp.task('copy', gulp.parallel(copyCSS, copyJS, copyhtml, copyImage, copyDataFiles));
gulp.task('watch', gulp.parallel(watchCSS, watchhtml, watchJS, watchImage, watchDataFiles));
gulp.task('default',gulp.series(cleanDist, gulp.parallel('browser-sync', 'copy', 'watch')));
