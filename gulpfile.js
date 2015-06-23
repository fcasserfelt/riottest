var gulp        = require('gulp');
var riot 		= require('gulp-riot');



gulp.task("riot", function(){
    return gulp.src('*.tag')
    	.pipe(riot())
        .pipe(gulp.dest(''));
});

