// gulp and packages setup
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer');
	// concat = require('gulp-concat'),
	// uglify = require('gulp-uglify');


gulp.task('sass', function() {

	// give it options for dev or production?
	return gulp.src('_standard/styles/*.scss')
		.pipe(sass({
			sourcemap: true
		}))
		.pipe(gulp.dest('build'));
});

// Watch Files For Changes
gulp.task('watch', function() {
	// gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('_standard/styles/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['watch']);
