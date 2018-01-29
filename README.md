
# gulp-common-cjd

A collection of common gulp tasks with sane defaults to keep your main gulpfile clean.

## Current Tasks

`properties` are modifiable.

* sass - using base `entryfile [str]` sass file, compile to `dest [str]`. Run through `sass [obj]`, `autoprefixer [obj]` and `cssnano [obj]`.
* js - copy `files [array]` to `outputFile [string]` in `dest [string]`. Run through `uglify [obj]`.
* imagemin - copy `files [array]` to `dest [string]` with `imagemin [obj]` properties.
* buildStatic - using base template `files [array]`, run through `templateData [obj]`, `handlebars [obj]`, `rename [obj]` and output to `dest`.

## Example gulpfiles

Minimal example:

```
require('gulp-common-cjd')(require('gulp'));
```

Override any properties:

```
const properties = {
    sass: {
            autoprefixer: null,
    },
    js: {
            uglify: {
                    mangle: true
            }
    }
}
require('gulp-common-cjd')(require('gulp'), properties);
```

Add your own tasks:

```
const gulp = require('gulp-common-cjd')(require('gulp'));
gulp.task('mytask',() => { console.log('my task') });
```

## Production mode

Pass `--environment=production` to use production mode which won't compile sourcemaps.

