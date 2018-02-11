describe('Imagemin Task', function(){
	const rimraf = require('rimraf');

	beforeEach(function(done){
		rimraf('./test/dist', function(){
		 	done();
		});
	});

	it('produces a smaller output file', function(done){

		const properties = {
			imagemin: {
				files: ['./test/fixtures/images/**/*'],
				dest: './test/dist/images'
			}
		}

		const fs = require('fs');
		const assert = require('assert');
		const gulp = require('../')(require('gulp'),properties);

		gulp.task('testim', ['imagemin'], function(){
			try {
				let testFile = './test/fixtures/images/test.png';
				let destFile = './test/dist/images/test.png';
				let testFileStats = fs.statSync(testFile);
				let destFileStats = fs.statSync(destFile);
				if( testFileStats.size <= destFileStats.size){
					assert(false, 'imagemin did not apply lossless compression');
				}
			} catch (err) {
				assert(false, err);
			}
			done();
		});
		gulp.start('testim');

	});

});
