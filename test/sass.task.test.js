var properties = {
    sass: {
        entryFile: './test/fixtures/scss/main.scss',
        dest: './test/dist/css'
    }
}

var fs = require('fs');
var assert = require('assert');
var gulp = require('../')(require('gulp'),properties);
var rimraf = require('rimraf');

describe('SASS Task', function(){

	beforeEach(function(){
		rimraf.sync('./test/dist');
	});

	it('produces css output file', function(){
		gulp.task('test', ['sass'], function(){
			try {
				fs.statSync('./test/dist/css/main.css');
			} catch (err) {
				assert(false,'File does not exist');
			}
		});
		gulp.start('test');
	});
});
