var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    jpegtran     = require('jpegtran'),
    execFile     = require('child_process').execFile

gulp.task('jpeg', function() {
  return gulp.src('app/img/**/*.jpg')
  execfile(jpegtran, ['-outfile', 'output.jpg', 'app/img/1.jpg']);
});

gulp.task('sass', function() {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascad: true}))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
    'app/libs/bootstrap/dist/js/bootstrap.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['sass'], function() {
  return gulp.src([
    'app/libs/bootstrap/dist/css/bootstrap.css',
    'app/libs/font-awesome/css/font-awesome.css'
  ])
  .pipe(cssnano())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/css'));
})

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  })
});

gulp.task('clean', function() {
  return del.sync('dist');
});

gulp.task('clear', function() {
  return cache.clearAll();
});

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  })))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

  var buildCss = gulp.src([
    'app/css/main.css',
    'app/css/libs.min.css'
  ])
  .pipe(gulp.dest('dist/css'));

  var buildFonts = gulp.src([
    'app/fonts/**/*'
  ])
  .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src([
    'app/js/**/*.js'
  ])
  .pipe(gulp.dest('dist/js'));

  var buildHtml = gulp.src([
    'app/*.html'
  ])
  .pipe(gulp.dest('dist'));
});
