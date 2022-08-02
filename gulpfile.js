import gulp from 'gulp';

// задачи

export const html = () => gulp
  .src('src/*.html')
  .pipe(gulp.dest('dist'));

export const css = () => gulp
  .src('src/css/index.css')
  .pipe(gulp.dest('dist/css'));

export const js = () => gulp
  .src('src/**/*.js')
  .pipe(gulp.dest('dist/js'));


// запуск

export default gulp.parallel(html, css, js);