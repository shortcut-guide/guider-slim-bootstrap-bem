var gulp = require('gulp');
var plumber = require('gulp-plumber');
var slim = require("gulp-slim");
var sass = require("gulp-sass");
var autoprefixer = require('autoprefixer');
var frontnote = require("gulp-frontnote");
var browser = require("browser-sync");

gulp.task("server", function() {
		browser({
				server: {
						baseDir: "./"
				}
		});
});

gulp.task('slim', function(){
	gulp.src('*.slim')
		.pipe(plumber())
		.pipe(slim({
			pretty: true,
			require: 'slim/include',
			options: 'include_dirs=["includes"]'
		}))
		.pipe(gulp.dest(''));
});

gulp.task('sass',function(){
	gulp.src('./asset/scss/**/!(_)*.scss')
		.pipe(frontnote({
			css: '../css/style.css'
		}))
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./css'));
});

gulp.task('default',['server'], function() {
	gulp.watch(['*.slim','includes/*.slim'],['slim']);
	gulp.watch(['./asset/scss/**/*.scss'],['sass']);
});

