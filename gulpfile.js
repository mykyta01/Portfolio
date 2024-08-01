// Import gulp and plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

// Paths to your files
const paths = {
  styles: {
    src: 'styles/main.scss',
    dest: 'dist/css'
  },
  scripts: {
    src: 'scripts/main.js',
    dest: 'dist/js'
  }
};

// Compile SCSS into CSS, generate sourcemaps, and minify
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Minify and concatenate JavaScript
function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Watch files for changes and reload the browser
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(styles, scripts));
const dev = gulp.series(build, watch);

// Export tasks to be run from the command line
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.dev = dev;
