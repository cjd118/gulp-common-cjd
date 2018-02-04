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
});
