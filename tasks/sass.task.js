module.exports = function(gulp, plugins, overrides){
	return function(){

		const defaults = {
			sass: {
				entryFile: './src/scss/main.scss',
				sass: {
					outputStyle: 'compressed'
				},
				autoprefixer: 'last 5 versions',
				cssnano: null,
				dest: './dist/css'
			}
		}

		const properties = plugins._.merge({}, defaults, overrides);

		gulp.src(properties.sass.entryFile)
		.pipe(plugins.gulpif(!properties.production, plugins.sourcemaps.init()))
		.pipe(plugins.sass(properties.sass).on('error', plugins.sass.logError))
		.pipe(plugins.autoprefixer(properties.autoprefixer))
		.pipe(plugins.cssnano(properties.cssnano))
		.pipe(plugins.gulpif(!properties.production, plugins.sourcemaps.write()))
		.pipe(gulp.dest(properties.sass.dest));
	}
}