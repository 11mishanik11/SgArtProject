'use strict';

import gulp from "gulp";

// Общие плагины
import renameFile from "gulp-rename"
import browserSync from "browser-sync"
import ifGulp from "gulp-if"

// Пути
import {path} from "./gulp/path.js" 

// Таски
import {reset} from "./gulp/tasks/reset.js"
import {html} from "./gulp/tasks/html.js"
import {scss} from "./gulp/tasks/scss.js"
import { js } from "./gulp/tasks/javascript.js";
import { images } from "./gulp/tasks/images.js";
import { fonts } from "./gulp/tasks/fonts.js";

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path,
    gulp,

    // Общие плагины в глобальной переменной
    renameFile,
    browserSync,
    if: ifGulp
}
const serve = function(done) {
    browserSync.init({
        server: {
            baseDir: app.path.build.html
        },
        port: 4200,
        notify: false
    });
};
const watching = function () {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.styles, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

const mainTasks = gulp.parallel(html, scss, js, images, fonts)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watching, serve))
const build = gulp.series(reset, mainTasks)

gulp.task("default", dev)
gulp.task("build", build)