const {
  series, dest, src, watch,
} = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const header = require('gulp-header');

const generatedHeader = '/* stylelint-disable */\n/* Generated File: Do not edit directly */\n';

function buildSystem() {
  return src('./system/index.css')
    .pipe(postcss())
    .pipe(header(generatedHeader))
    .pipe(rename('system.css'))
    .pipe(dest('./dist'));
}

function buildStorybookCss() {
  return src('.storybook/story.post.css')
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
