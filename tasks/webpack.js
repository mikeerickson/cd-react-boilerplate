// WEBPACK MODULE
// webpack.js
// Mike Erickson <codedungeon@gmail.com>
// 2016-04-02 - 6:22 PM
// $ npm i -D gulp gulp-webpack gulp-messenger
// =============================================================================

/* eslint no-undef:0*/
/* eslint no-unused-vars:0*/

import gulp    from 'gulp'
import webpack from 'gulp-webpack'
import config  from './gulp.config'
import msg     from 'gulp-messenger'
import temp    from 'cd-utils'

let utils = temp({});

console.log(utils.param('type'));

// set variable via $ gulp --type production
let env           = utils.param('type') || 'development';
let isProd        = env === 'production';
let webpackConfig = require('../webpack.config.js');

console.log('webpack', webpackConfig);

console.log(webpackConfig.entry);

gulp.task('webpack', () => {
	return gulp.src(webpackConfig.entry)
		.pipe(webpack( require('../webpack.config.js') ))
		.pipe(gulp.dest(config.scripts.dest))
		.pipe(msg.flush.success(`*** React Files Compiled [${config.scripts.dest}/${config.scripts.filename}] ${new Date()} ***`));
})

