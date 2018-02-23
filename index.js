module.exports = function(gulpObject, properties = {}){
	const gulp = gulpObject || require('gulp');
	const plugins = {
		'_': require('lodash'),
		'sass': require('gulp-sass'),
		'autoprefixer': require('gulp-autoprefixer'),
		'sourcemaps': require('gulp-sourcemaps'),
		'cssnano': require('gulp-cssnano'),
		'gulpif': require('gulp-if'),
		'concat': require('gulp-concat'),
		'uglify': require('gulp-uglify'),
		'imagemin': require('gulp-imagemin'),
		'compileHandlebars': require('gulp-compile-handlebars'),
		'rename': require('gulp-rename')
	}
	const params = require('minimist')(process.argv.slice(2));
	const overrides = {
		production: params.environment=='production' ? true : false
	}

	properties = plugins._.merge({},properties,overrides);

	gulp.task('sass', require('./tasks/sass.task.js')(gulp,plugins,properties));
	gulp.task('js', require('./tasks/js.task.js')(gulp,plugins,properties));
	gulp.task('imagemin', require('./tasks/imagemin.task.js')(gulp,plugins,properties));
	gulp.task('buildStatic', require('./tasks/buildStatic.task.js')(gulp,plugins,properties));
	gulp.task('default', require('./tasks/default.task.js')());

	gulp.task('watch', require('./tasks/watch.task.js')(gulp,plugins,properties));

	return gulp;
}