describe('JS Task', function(){
	const rimraf = require('rimraf');

	beforeEach(function(done){
		rimraf('./test/dist', function(){
		 	done();
		});
	});

	it('produces js output file called main.js', function(done){

		const properties = {
			js: {
				files: ['./test/fixtures/js/script.js'],
				dest: './test/dist/js'
			}
		}

		const fs = require('fs');
		const assert = require('assert');
		const gulp = require('../')(require('gulp'),properties);

		gulp.task('testjs', ['js'], function(){
			try {
				fs.statSync('./test/dist/js/main.js');
			} catch (err) {
				assert(false, err);
			}
			done();
		});
		gulp.start('testjs');

	});

	it('supports custom output name of custom.js', function(done){

		const properties = {
			js: {
				files: ['./test/fixtures/js/script.js'],
				dest: './test/dist/js',
				outputFile: 'custom.js'
			}
		}

		const fs = require('fs');
		const assert = require('assert');
		const gulp = require('../')(require('gulp'),properties);

		gulp.task('testjs2', ['js'], function(){
			try {
				fs.statSync('./test/dist/js/custom.js');
			} catch (err) {
				assert(false, err);
			}
			done();
		});
		gulp.start('testjs2');

	});
});
