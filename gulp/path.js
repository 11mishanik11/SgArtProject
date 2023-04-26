'use strict';

let srcFolder = "src"
let buildFolder = "dist"

export const path = {
    build: {
        html: `${buildFolder}/`,
        styles: `${buildFolder}/assets/css/`,
        js: `${buildFolder}/assets/scripts/`,
        images: `${buildFolder}/assets/images/`,
        fonts: `${buildFolder}/assets/fonts/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        styles: `${srcFolder}/assets/scss/*.scss`,
        js: `${srcFolder}/assets/scripts/*.js`,
        images: `${srcFolder}/assets/images/**/*.{jpg,png,webp,svg,gif}`,
        fonts: `${srcFolder}/assets/fonts/**/*`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        styles: `${srcFolder}/assets/scss/**/*.scss`,
        js: `${srcFolder}/assets/scripts/**/*.js`,
        images: `${srcFolder}/assets/images/**/*.{jpg,png,webp,svg,gif}`
    },
    clean: (buildFolder)
}