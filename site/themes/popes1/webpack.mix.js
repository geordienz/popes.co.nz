let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.sass('sass/popes.scss', 'css')
    .scripts([
        './js/vendor/slippry.js',
        './js/vendor/scotchPanels.js',
        './js/site.js'
    ], './js/popes.js')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('tailwind.js')]
   });
