module.exports = function(gulp, plugins, overrides){
	return function(done){

		const defaults = {
			js: {
				files: ['./src/js/script.js'],
				uglify: {
					mangle: false
				},
				outputFile: 'main.js',
				dest: './dist/js'
			}
		}

		const properties = plugins._.merge({}, defaults, overrides);

		return gulp.src(properties.js.files)
		.pipe(plugins.gulpif(!properties.production, plugins.sourcemaps.init()))
		.pipe(plugins.concat(properties.js.outputFile))
		.pipe(plugins.uglify(properties.js.uglify))
		.pipe(plugins.gulpif(!properties.production, plugins.sourcemaps.write()))
		.pipe(gulp.dest(properties.js.dest));
	}
}