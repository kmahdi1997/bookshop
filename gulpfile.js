const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function css() {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest('dist/css'))
}

function js() {
    return src('src/js/**/*.js', {sourcemaps: false})
        .pipe(concat('app.min.js'))
        .pipe(dest('dist/js', { sourcemaps: false }))
}

exports.js = js;
exports.css = css;
exports.default = function() {
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', js);
}