module.exports = function(gulp, plugins, overrides){
	return function(){

		const defaults = {
			buildStatic: {
				files: ['./src/pages/*.hbs'],
				templateData: {},
				handlebars: {
					batch: ['./src/partials','./src/layouts']
				},
				rename: {
					extname: '.html'
				},
				dest: './dist/'
			}
		}

		const properties = plugins._.merge({}, defaults, overrides);

		return gulp.src(properties.buildStatic.files)
		.pipe(plugins.compileHandlebars(properties.buildStatic.templateData, properties.buildStatic.handlebars))
		.pipe(plugins.rename(properties.buildStatic.rename))
		.pipe(gulp.dest(properties.buildStatic.dest))
	}
}