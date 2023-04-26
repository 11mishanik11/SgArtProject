'use strict';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import cssnano from 'gulp-cssnano';
const sass = gulpSass(dartSass);

export const scss = function() {
    return app.gulp.src(app.path.src.styles)
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(
            app.if(
                app.isBuild,
                autoPrefixer({
                    overrideBrowserslist: [
                        'last 8 versions',
                        'not dead', // Добавляет поддержку популярных старых браузеров
                        '> 0.2%'    // Добавляет поддержку популярных старых браузеров
                    ],
                    grid: true
                })
            )
        )
        .pipe(
            app.if(
                app.isBuild,
                gcmq()
            )
        )
        // Расскоментировать если нужен не сжатый дубль стилей
        .pipe(app.gulp.dest(app.path.build.styles))
        // ---------------------------------------------------
        .pipe(
            app.if(
                app.isBuild,
                cssnano({
                    zindex: false,
                    discardComments: {
                        removeAll: true
                    }
                })
            )
        )
        .pipe(app.renameFile({
                    suffix: ".min",
                    extname: ".css"
                }
            )
        )
    .pipe(app.gulp.dest(app.path.build.styles))
    .pipe(app.browserSync.stream())
}