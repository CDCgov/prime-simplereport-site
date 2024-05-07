/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const uncss = require("postcss-uncss");
const gulp = require("gulp");
const pkg = require("./node_modules/uswds/package.json");
const postcss = require("gulp-postcss");
const replace = require("gulp-replace");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uswds = require("@uswds/compile");

sass.compiler = require("sass");

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

uswds.settings.version = 2;

// Project Sass source directory
const PROJECT_SASS_SRC = "./_sass";
uswds.paths.src.projectSass = PROJECT_SASS_SRC;

// Images destination
const IMG_DEST = "./assets/uswds/img";

// Fonts destination
const FONTS_DEST = "./assets/uswds/fonts";

// Javascript destination
const JS_DEST = "./assets/uswds/js";

// Compiled CSS destination
const CSS_DEST = "./assets/uswds/css";

// Site CSS destination
// Like the _site/assets/css directory in Jekyll, if necessary.
// If using, uncomment line 106
const SITE_CSS_DEST = "./assets/uswds/css";

// Check if building for GH pages
const ghPages = process.argv[3] === "--ghpages" ? true : false;

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task("copy-uswds-setup", () => {
  return gulp
    .src(`${uswds}/scss/theme/**/**`)
    .pipe(gulp.dest(`${PROJECT_SASS_SRC}`));
});

gulp.task("copy-uswds-fonts", () => {
  return gulp.src(`${uswds}/fonts/**/**`).pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task("copy-subset-fonts", () => {
  return gulp
    .src(`_subsetfonts/**/**`)
    .pipe(gulp.dest(`${FONTS_DEST}`, { overwrite: true }));
});

gulp.task("copy-uswds-images", () => {
  return gulp.src(`${uswds}/img/**/**`).pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task("copy-uswds-js", () => {
  return gulp.src(`${uswds}/js/**/**`).pipe(gulp.dest(`${JS_DEST}`));
});

gulp.task("build-sass", function () {
  var plugins = [
    // Autoprefix
    autoprefixer({
      cascade: false,
      grid: true,
    }),
    // Minify
    csso({ forceMediaMerge: false }),
  ];
  return (
    gulp
      .src([`${PROJECT_SASS_SRC}/*.scss`])
      .pipe(sourcemaps.init({ largeFile: true }))
      .pipe(
        sass.sync({
          includePaths: [
            `${PROJECT_SASS_SRC}`,
            `${uswds}/scss`,
            `${uswds}/scss/packages`,
          ],
        }),
      )
      .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
      .pipe(
        ghPages
          ? replace(/\/assets\/img/g, "/prime-simplereport-site/assets/img")
          : replace(/this will never be found/g, "this will never be found"),
      )
      .pipe(postcss(plugins))
      .pipe(sourcemaps.write("."))
      // uncomment the next line if necessary for Jekyll to build properly
      .pipe(gulp.dest(`${SITE_CSS_DEST}`))
      .pipe(gulp.dest(`${CSS_DEST}`))
  );
});

gulp.task("uncss", function () {
  var plugins = [
    uncss({
      html: ["./_site/**/*.html"],
      htmlroot: "./_site",
      ignore: [
        ".usa-overlay.is-visible",
        /^\.usa-nav/,
        /^\.usa-accordion__button/,
        /^\.usa-banner__button/,
        /^\.usa-banner__header--expanded/,
        /^\.usa-alert/,
        /^\.fba-alert/,
        /^\.usa-menu-btn/,
        ".page--home .usa-nav__primary button[aria-expanded=true]",
        "#fba-touchpoints-page-form-yes",
        "#fba-touchpoints-page-form-no",
      ],
    }),
  ];
  return gulp
    .src(`${SITE_CSS_DEST}/*.css`)
    .pipe(postcss(plugins))
    .pipe(gulp.dest(`${SITE_CSS_DEST}`));
});

gulp.task(
  "init",
  gulp.series(
    "copy-uswds-setup",
    "copy-uswds-fonts",
    "copy-subset-fonts",
    "copy-uswds-images",
    "copy-uswds-js",
    "build-sass",
  ),
);

gulp.task("watch-sass", function () {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series("build-sass"));
});

gulp.task("watch", gulp.series("build-sass", "watch-sass"));

gulp.task("default", gulp.series("watch"));
