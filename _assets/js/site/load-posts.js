jQuery( document ).ready( function( $ ) {
	var lp = {
		listSelector : '#post_list',
		liSelector   : '#post_list>li',
		$list        : undefined,
		btnSelector  : '.js-load-more',
		$btn         : undefined,
	};

	lp.getPosts = function( postsUrl ) {
		console.log( 'http://127.0.0.1:4000/page2' + ' ' + lp.liSelector );
		lp.$list.get( 'http://127.0.0.1:4000/page2' + ' ' + lp.liSelector, {}, function( resp ) {
			console.log( resp );
		} );

		return false;
	}; // lp.getPosts()

	/**
	 * Initializes load posts.
	 *
	 * @return  {Boolean}  false
	 */
	lp.init = function() {
		lp.$list = $( lp.listSelector );
		lp.$btn = $( lp.btnSelector );

		// Make sure we have something to work with.
		if ( lp.$list.length === 0 || lp.$btn.length === 0 ) {
			return false;
		} // if()

		$( document ).on( 'click', lp.btnSelector, function( e ) {
			e.preventDefault();

			var postsUrl = $( this ).attr( 'href' );
			lp.getPosts( postsUrl );

			return false;
		} );

		return false;
	}; // lp.init()

	/**
	 * Document Ready.
	 */
	$( document ).ready( function() {
		lp.init();
	} );
} );
