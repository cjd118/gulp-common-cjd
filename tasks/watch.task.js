module.exports = function(gulp, plugins, overrides){
	return function(done){

		const defaults = {
			watch: {
				sass: './src/scss/**/*.scss',
				js: './src/js/**/*.js',
				buildStatic: 'src/**/*.hbs'
			}
		}

		const properties = plugins._.merge({}, defaults, overrides);

		gulp.watch(properties.watch.sass, ['sass']);
		gulp.watch(properties.watch.js, ['js']);
		gulp.watch(properties.watch.buildStatic, ['buildStatic']);
		
	}
}