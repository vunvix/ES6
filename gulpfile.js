const gulp = require('gulp');
const babel = require('gulp-babel');
var minify = require('gulp-minify');
 
gulp.task('transpoil', () => {
	return gulp.src('models/Shapes.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(minify({
			ext:{
				src:'.js',
				min:"-min.js"
			},
			exclude: ['tasks'],
			ignoreFiles: ['.combo.js', '-min.js']
		}))
		.pipe(gulp.dest('dist'));
});