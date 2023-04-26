import imagemin from 'gulp-imagemin'

export const images = function() {
    return app.gulp.src(app.path.src.images)
        .pipe(
            app.if(
                app.isBuild,
                imagemin()
            )
        )
    .pipe(app.gulp.dest(app.path.build.images))
}