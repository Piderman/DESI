// gulp and packages setup
var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	livereload = require('gulp-livereload'),
	shell = require('gulp-shell');
	// concat = require('gulp-concat'),
	// uglify = require('gulp-uglify');

// project settings
project = {
	sass__dir : '_standard/styles/*.scss',
	build__dir : 'build'
};

gulp.task('sass', function() {

	// give it options for dev or production?
	return gulp.src(project.sass__dir)
		.pipe(sass({
			sourcemap: true
		}))
		.pipe(gulp.dest(project.build__dir))
		.pipe(livereload());
});


// Watch Files For Changes
gulp.task('watch', function() {

	// gulp.watch('js/*.js', ['lint', 'scripts']);
	gulp.watch('_standard/styles/*.scss', ['sass']);

});




//----------------------------------------------------------------------------


// production settings, readying for deployment

gulp.task('sass--prod', function() {
	return gulp.src(project.sass__dir)
		.pipe(sass({
			style : 'compressed'
		}))
		.pipe(gulp.dest(project.build__dir));
});

gulp.task('housekeeping', shell.task([
	// remove maps (if exist)
	'rm -f build/*.map',

	// build jekyll so we can have look. warn: shouldn't be running already
	'jekyll serve'
]));


// Default Task
gulp.task('default', ['watch']);
gulp.task('production', ['sass--prod', 'housekeeping']);
