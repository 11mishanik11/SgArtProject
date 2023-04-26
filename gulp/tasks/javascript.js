import rigger from 'gulp-rigger'
import uglify from 'gulp-uglify'

export const js = function() {
    return app.gulp.src(app.path.src.js)
        .pipe(rigger())
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(
            app.if(
                app.isBuild,
                uglify()
            )
        )
        .pipe(app.renameFile({
                    suffix: ".min",
                    extname: ".js"
                }
            )
        )
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.browserSync.stream())
}