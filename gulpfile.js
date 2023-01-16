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
  return src('./system/index.css')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(postcss())
    .pipe(header(generatedHeader))
    .pipe(rename('system.css'))
    .pipe(dest('./dist'));
}

function buildStorybookCss() {
  return src('.storybook/story.post.css')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(postcss())
    .pipe(header(generatedHeader))
    .pipe(rename('story.css'))
    .pipe(dest('.storybook/'));
}

function startWatching() {
  watch(['./system/**/*.css', '.storybook/*.post.css'], undefined, series(buildSystem, buildStorybookCss));
}

exports.dev = series(
  buildSystem,
  buildStorybookCss,
  startWatching,
);

exports.build = series(buildSystem);
