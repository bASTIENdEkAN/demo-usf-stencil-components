let mix = require('laravel-mix');

mix
    .copyDirectory("resources/images", "output/images")
    .js('resources/js/app.js', 'output/js/app.js')
    // .sass('resources/scss/app.scss', 'output/css/app.css')
    .browserSync({
        proxy: 'http://127.0.0.1:8080',
        watch: true,
        files: ["output/html/*.html", "output/js/*.js", "output/css/*.css"]
    })

    .setPublicPath('output');
