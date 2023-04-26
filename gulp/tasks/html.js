'use strict';
import fileInclude from "gulp-file-include";
import htmlBeautify from "gulp-html-beautify"
import htmlmin from "gulp-htmlmin";

export const html = function() {
    return app.gulp.src(app.path.src.html)
        .pipe(fileInclude())

        // есть всякие настройки под себя, смотреть доку
        .pipe(htmlBeautify())

        // Расскоментировать если нужен не сжатый дубль
        .pipe(app.gulp.dest(app.path.build.html))
        // --------------------------------------------

        .pipe(
            app.if(
                app.isBuild,
                htmlmin({ 
                    collapseWhitespace: true,
                    removeComments: true
                 })
            )
        )
        .pipe(app.renameFile({
                    suffix: ".min",
                    extname: ".html"
                }
            )
        )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.browserSync.stream())
}