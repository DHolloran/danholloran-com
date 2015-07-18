// Require all the things!!!!
var gulp          = require( 'gulp' );
var livereload    = require( 'gulp-livereload' );
var sass          = require( 'gulp-sass' );
var sourcemaps    = require( 'gulp-sourcemaps' );
var postcss       = require( 'gulp-postcss' );
var changed       = require( 'gulp-changed' );
var autoprefixer  = require( 'autoprefixer-core' );
var cssnano       = require( 'gulp-cssnano' );
var mqpacker      = require( 'css-mqpacker' );
var singleCharset = require( 'postcss-single-charset' );
var inlineImport  = require( 'postcss-import' );
var notify        = require( 'gulp-notify' );
var scsslint = require( 'gulp-scss-lint' );

// Set Directories.
var distSrc        = './dist';
var assetsSrc      = './_assets/';
var jsSrc          = assetsSrc + '/js/**/*.js';
var jsDistSrc      = distSrc + '/js/';
var scssSrc        = assetsSrc + '/scss/**/*.scss';
var cssDistSrc     = distSrc + '/css';
var mapsSrc        = '../maps/';
var mapsDistSrc    = distSrc + '/maps/';
var imageUploadSrc = '/_uploads/**/*.[png,gif,jpg,jpeg]';
var imageAssetSrc  = assetsSrc + '/img/**/*.[png,gif,jpg,jpeg]';

// Styles Task
gulp.task( 'styles', function() {
  // PostCSS Processors.
  var processors = [
        autoprefixer(),
        mqpacker,
        singleCharset,
        inlineImport,
      ]
  ;

  gulp.src( scssSrc )
    .pipe( changed( cssDistSrc ) )
    .pipe( sourcemaps.init() )
    .pipe( scsslint() )
    .pipe( scsslint.failReporter( 'E' ) )
    .pipe( sass().on( 'error', sass.logError ) )
    .pipe( postcss( processors ) )
    .pipe( cssnano() )
    .pipe( sourcemaps.write( mapsSrc ) )
    .pipe( gulp.dest( cssDistSrc ) )
    .pipe( notify( 'Styles task complete!' ) );
} );

// Watch Task.
gulp.task( 'watch', function() {
  livereload.listen();
  gulp.watch( scssSrc, [ 'styles' ] );
} );

// Default Task.
gulp.task( 'default', [ 'watch' ], function() {} );
