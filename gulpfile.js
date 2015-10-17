'use script';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
var babel = require("gulp-babel");


/**
 * serves the static files 
 * add option 'open' to open a browser when starting.
 * optino livereload injects script to refresh browser.
 */
gulp.task('serve', function(){
  gulp.src('./public')
    .pipe(webserver({
      https: false,
	  livereload: true,
      port: '8080',
      host: 'localhost',
      directoryListing: false,
      fallback: 'index.html'
    }));
});


gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});




// gulp.task('dist', function(){
// 	return gulp.src(['node_modules/react/dist/react.js',
// 			'node_modules/react/dist/react-dom.js'])
// 		.pipe(gulp.dest('public/dist'));
// 	
// });

// 
// gulp.task('dist', function() {
//     return gulp.src(sources)
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(rename(minified))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest('dist'));
// });
// 
