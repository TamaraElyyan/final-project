import gulp from 'gulp';
import shell from 'gulp-shell';

// Define tasks using gulp and shell
gulp.task('serve', shell.task('parcel serve starter/src/index.js'));

// Task to build the project using Parcel
gulp.task('build', shell.task('parcel build starter/src/index.js'));

// Task to run tests using Mocha
gulp.task('test', shell.task('mocha test/shuffle.test.js'));

// Define the default task to run when you type 'gulp' in the terminal
gulp.task('default', gulp.series('serve'));
