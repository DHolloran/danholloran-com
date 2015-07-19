// Require all the things!!!!
var gulp = require( 'gulp' );
var $    = require( 'gulp-load-plugins' )( {
  pattern : [ 'gulp-*', 'gulp.*', 'postcss-*' ]
} );

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
        require( 'autoprefixer-core' )(),
        require( 'css-mqpacker' )(),
        $.postcssSingleCharset,
        $.postcssImport,
      ]
  ;

  gulp.src( scssSrc )
    .pipe( $.changed( cssDistSrc ) )
    .pipe( $.sourcemaps.init() )
    .pipe( $.scssLint() )
    .pipe( $.scssLint.failReporter( 'E' ) )
    .pipe( $.sass().on( 'error', $.sass.logError ) )
    .pipe( $.postcss( processors ) )
    .pipe( $.cssnano() )
    .pipe( $.sourcemaps.write( mapsSrc ) )
    .pipe( gulp.dest( cssDistSrc ) )
    .pipe( $.notify( 'Styles task complete!' ) );
} );

// Watch Task.
gulp.task( 'watch', function() {
  $.livereload.listen();
  gulp.watch( scssSrc, [ 'styles' ] );
} );

// Default Task.
gulp.task( 'default', [ 'watch' ], function() {} );
