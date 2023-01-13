const {
  series, dest, src, watch,
} = require('gulp');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const header = require('gulp-header');

const generatedHeader = '/* stylelint-disable */\n/* Generated File: Do not edit directly */\n';

/**
 * UTIL TASKS
 */
const errorMsg = '\x1b[41mError\x1b[0m';

function onError(err) {
  gutil.beep();
  gutil.log(`${errorMsg} ${err.toString()}`);

  // @ts-ignore
  this.emit('end');
}

function buildSystem() {
  return src('./styles/system/index.css')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(postcss())
    .pipe(header(generatedHeader))
    .pipe(rename('system.css'))
    .pipe(dest('./styles'));
}

function startWatching() {
  watch(['./styles/system/**/*.css'], undefined, series(buildSystem));
}

exports.dev = series(
  buildSystem,
  startWatching,
);

exports.build = series(buildSystem);