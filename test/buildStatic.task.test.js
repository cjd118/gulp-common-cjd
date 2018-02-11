describe('BuildStatic Task', function(){
	const rimraf = require('rimraf');

	beforeEach(function(done){
		rimraf('./test/dist', function(){
		 	done();
		});
	});

	it('buildStatic builds', function(done){

		const properties = {
			buildStatic: {
				files: ['./test/fixtures/pages/*.hbs'],
				handlebars: {
					batch: ['./test/fixtures/partials','./test/fixtures/layouts']
				},
				dest: './test/dist/'
			}
		}

		const fs = require('fs');
		const assert = require('assert');
		const gulp = require('../')(require('gulp'),properties);

		gulp.task('testim', ['buildStatic'], function(){
			try {
				let content = fs.readFileSync('./test/dist/test.html', 'utf8');
				if( !content.includes('default layout') ){
					assert(false, 'layout not merged');
				}
				if( !content.includes('test partial content') ){
					assert(false, 'partial not merged');
				}
				if( !content.includes('some text in the page') ){
					assert(false, 'page not merged');
				}
			} catch (err) {
				assert(false, err);
			}
			done();
		});
		gulp.start('testim');

	});

});
