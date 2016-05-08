var gulp = require("gulp");
var gUtil = require("gulp-util");
var path = require("path");
var webpack = require("webpack");
var del = require("del");
var fs = require("fs");
var objectAssign = require("object-assign");

var webpackConfig = require("./webpack.config.js");

gulp.task("build", function () {
    webpack(webpackConfig, webpackCallback);

    movePage();
});

gulp.task("build-watch", function () {
  var config = objectAssign({}, webpackConfig);

  webpack(config, function () {
      console.log("...Completed initial build.");
      console.log("Watching for changes...");

      config.watch = true;

      webpack(config, webpackCallback);
  });

  movePage();
});

gulp.task("clean", function () {
    del("client/dist/*");
});

function movePage() {
    gulp.src("client/src/index.html")
        .pipe(gulp.dest("client/dist"));
}

function makeDist() {
  if (!fs.existsSync("client/dist")) {
    fs.mkdirSync("client/dist");
  }
}

function webpackCallback(err, stats) {
    if (err) {
        console.log("Webpack error!");

        throw new gUtil.PluginError("webpack", err);
    }
    else {
        console.log("Built @ " + new Date().toISOString());
    }
}
