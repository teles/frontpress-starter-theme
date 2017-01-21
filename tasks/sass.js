var gulp = require('gulp');
var sass = require('gulp-sass');
 
module.exports = function() {

	var task = gulp.src('./sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('./css'));

	return task;
};