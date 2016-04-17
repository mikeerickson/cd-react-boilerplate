// COPY CLEAN TASK
// =============================================================================

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import gulp         from 'gulp'
import msg          from 'gulp-messenger'
import handleErrors from './utils/handleErrors'
import plumber      from 'gulp-plumber'
import config       from './gulp.config'
import temp         from 'cd-utils'
import path         from 'path'
import fs           from 'fs'

let utils = temp({})
msg.init({timestamp: true, showPipeFile: false})

gulp.task('clean', () => {
  return gulp.src('files')
    .on('error', handleErrors)
	.pipe(gulp.dest('dist'))
	.pipe(msg.flush.error(`*** Incomplete Task: Clean ***`));
});



