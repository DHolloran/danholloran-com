// Require all the things!!!!
var gulp    = require( 'gulp' );
var del     = require( 'del' );
var request = require( 'request' );
var $       = require( 'gulp-load-plugins' )( {
	pattern : [ 'gulp-*', 'gulp.*', 'postcss-*' ]
} );

// Set Directories.
var distSrc            = './dist';
var assetsSrc          = './_assets/';
var jsSrc              = assetsSrc + '/js/**/*.js';
var jsDistSrc          = distSrc + '/js/';
var bowerDir           = assetsSrc + '/bower_components/';
var scssSrc            = assetsSrc + '/scss/**/*.scss';
var cssDistSrc         = distSrc + '/css';
var mapsSrc            = '../maps/';
var mapsDistSrc        = distSrc + '/maps/';
var imageUploadSrc     = './_uploads/**/*';
var imageAssetSrc      = assetsSrc + '/img/**/*';
var imageUploadDistSrc = distSrc + '/uploads/';
var imageAssetDistSrc  = distSrc + '/img/';
var htmlDistSrc        = '_site/**/*.html';
var siteURL            = 'http://danholloran.me';
var sitemapURL         = siteURL + '/sitemap.xml';

// Clean task.
gulp.task( 'clean', function( cb ) {
	del( [
		distSrc + '/**/*',
	], cb );
} );

// Scripts.
gulp.task( 'scripts', function() {
  var concatFiles = [
				bowerDir + 'jquery/dist/jquery.js',
				jsSrc,
			]
	;

	return gulp.src( concatFiles )
		.pipe( $.changed( jsDistSrc ) )
		.pipe( $.sourcemaps.init() )
    .pipe( $.concat( 'main.js' ) )
		.pipe( $.uglify() )
		.pipe( $.sourcemaps.write( mapsSrc ) )
    .pipe( gulp.dest( jsDistSrc ) );
} );

// Image uploads task.
gulp.task( 'images:uploads', function() {
	gulp.src( imageUploadSrc )
		.pipe( $.changed( imageUploadDistSrc ) )
		.pipe( $.imagemin( {
				optimizationLevel : 3,
				progressive       : true,
				interlaced        : true
		} ) )
		.pipe( gulp.dest( imageUploadDistSrc ) )
		.pipe( $.notify( 'Image uploads task complete!' ) );
} );

// Image assets task.
gulp.task( 'images:assets', function() {
	return gulp.src( imageAssetSrc )
		.pipe( $.changed( imageAssetDistSrc ) )
		.pipe( $.imagemin( {
				optimizationLevel : 3,
				progressive       : true,
				interlaced        : true
		} ) )
		.pipe( gulp.dest( imageAssetDistSrc ) )
		.pipe( $.notify( 'Images assets task complete!' ) );
} );

// Images task
gulp.task( 'images', [ 'images:uploads', 'images:assets' ] );

// Styles Task
gulp.task( 'styles', function() {
	// PostCSS Processors.
	var processors = [
				require( 'autoprefixer-core' )( 'last 1 version' ),
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

// Build task.
gulp.task( 'build', [ 'images', 'styles', 'scripts' ] );

// Gulp seo task.
gulp.task( 'seo', [ 'build' ], function( cb ) {
		request( 'http://www.google.com/webmasters/tools/ping?sitemap=' + sitemapURL );
		request( 'http://www.bing.com/webmaster/ping.aspx?siteMap=' + sitemapURL );
		cb();
} );

// Watch Task.
gulp.task( 'watch', [ 'build' ], function() {
	gulp.watch( jsDistSrc, [ 'scripts' ] );
	gulp.watch( scssSrc, [ 'styles' ] );
	gulp.watch( [ imageUploadSrc ], [ 'images:uploads' ] );
	gulp.watch( [ imageAssetSrc ], [ 'images:asset' ] );
} );

// Default Task.
gulp.task( 'default', [ 'watch' ] );
