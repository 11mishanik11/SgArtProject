'use strict';
export const fonts = function() {
    return app.gulp.src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.fonts))
}