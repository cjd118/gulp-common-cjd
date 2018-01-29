module.exports = function(gulp, plugins, overrides){
	return function(){

		const defaults = {
			imagemin: {
				files: ['./src/images/**/*'],
				imagemin: {},
				dest: './dist/images'
			}
		}

		const properties = plugins._.merge({}, defaults, overrides);

		gulp.src(properties.imagemin.files)
		.pipe(plugins.imagemin(properties.imagemin.imagemin))
		.pipe(gulp.dest(properties.imagemin.dest));
	}
}