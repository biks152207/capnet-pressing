"use strict";

// Load plugins
var gulp = require("gulp"),
    sass = require("gulp-ruby-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cssnano = require("gulp-cssnano"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    imagemin = require("gulp-imagemin"),
    rename = require("gulp-rename"),
    concat = require("gulp-concat"),
    notify = require("gulp-notify"),
    cache = require("gulp-cache"),
    livereload = require("gulp-livereload"),
    del = require("del");

// Styles
gulp.task("styles", function() {
  return sass("src/styles/main.scss", { style: "expanded" })
    .pipe(autoprefixer("last 2 version"))
    .pipe(gulp.dest("public/styles"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cssnano())
    .pipe(gulp.dest("public/styles"))
    .pipe(notify({ message: "Styles task complete" }));
});

// Scripts
gulp.task("scripts", function() {
  return gulp.src("src/scripts/**/*")
    .pipe(gulp.dest("public/scripts"))
    .pipe(notify({ message: "Scripts task complete" }));
});

// Images
gulp.task("images", function() {
  return gulp.src("src/images/**/*")
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest("public/images"))
    .pipe(notify({ message: "Images task complete" }));
});

// Clean
gulp.task("clean", function() {
  return del(["public/styles", "public/scripts", "public/images"]);
});

// Default task
gulp.task("default", ["clean"], function() {
  gulp.start("styles");
  gulp.start("scripts");
  gulp.start("images");
  gulp.start("watch");
});

// Watch
gulp.task("watch", function() {
  // Watch .scss files
  gulp.watch("src/styles/**/*.scss", ["styles"]);

  // Watch scripts folder
  gulp.watch("src/scripts/**/*", ["scripts"]);

  // Watch image files
  gulp.watch("src/images/**/*", ["images"]);

  // Watch html files
  gulp.watch("views/**/*", ["scripts", "images"]);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in public/, reload on change
  gulp.watch(["public/**", "views/**/*"]).on("change", livereload.changed);
});
