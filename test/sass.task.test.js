describe('SASS Task', function(){
	const rimraf = require('rimraf');

	beforeEach(function(done){
		rimraf('./test/dist', function(){
		 	done();
		});
	});

	it('produces css output file', function(done){

		const properties = {
			sass: {
				entryFile: './test/fixtures/scss/main.scss',
				dest: './test/dist/css'
			}
		}

		const fs = require('fs');
		const assert = require('assert');
		const gulp = require('../')(require('gulp'),properties);

		gulp.task('test', ['sass'], function(){
			try {
				fs.statSync('./test/dist/css/main.css');
			} catch (err) {
				assert(false, err);
			}
			done();
		});
		gulp.start('test');

	});

	it('works with cssnano', function(done){

		const properties = {
			sass: {
				entryFile: './test/fixtures/scss/main.scss',
				dest: './test/dist/css'
			}
		}

		const fs = require('fs');
		const assert = require('assert');
		const gulp = require('../')(require('gulp'),properties);

		gulp.task('test2', ['sass'], function(){
			try {
				let content = fs.readFileSync('./test/dist/css/main.css', 'utf8');
				if( !content.includes('color:red') ){
					assert(false, 'string "color:red" was missing - check if cssnano is working?');
				}
			} catch (err) {
				assert(false, err);
			}
			done();
		});
		gulp.start('test2');

	})
});
