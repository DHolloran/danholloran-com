// Require all the things!!!!
var gulp       = require( 'gulp' );
var livereload = require( 'gulp-livereload' );

// Set Directores
var distSrc        = './dist';
var assetsSrc      = './_assets/';
var jsSrc          = assetsSrc + '/js/**/*.js';
var jsDistSrc      = distSrc + '/js/';
var scssSrc        = assetsSrc + '/scss/**/*.scss';
var cssDistSrc     = distSrc + '/css';
var mapsSrc        = './maps/';
var mapsDistSrc    = distSrc + '/maps/';
var imageUploadSrc = '/_uploads/**/*.[png,gif,jpg,jpeg]';
var imageAssetSrc  = assetsSrc + '/img/**/*.[png,gif,jpg,jpeg]';

gulp.task( 'watch', function() {
  livereload.listen();
  gulp.watch( '_site/**/*' );
} );

gulp.task( 'default', [ 'watch' ], function() {

} );
