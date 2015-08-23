jQuery( function( $ ) {
	var _init = {};

	/**
	 * Initializes jQuery Age.
	 * https://github.com/ksylvest/jquery-age
	 *
	 * @return  {Boolean}  false
	 */
	_init.jqueryAge = function() {
		// Make sure we have the jQuery Age plugin available.
		if ( typeof $.fn.age !== 'function' ) {
			return;
		} // if()

		// Get the post date element if it exists.
		var $postDate = $( '.post-date' );
		if ( $postDate.length === 0 ) {
			return;
		} // if()

		// Set the post "age",
		$postDate.each( function( index, el ) {
			$( el ).age();
		} ); // $postDate.each()

		return false;
	}; // _init.jqueryAge()

	/**
	 * Initializes the jQuery Reading Time plugin.
	 *
	 * @return  {Boolean}  false
	 */
	_init.jqueryReadingTime = function() {
		// Make sure the jQuery Reading Time plugin exists.
		if ( typeof $.fn.readingtime !== 'function' ) {
			return;
		} // if()

		// Make sue we have some articles to work with.
		var $articles = $( '.post-content' );
		if ( $articles.length === 0 ) {
			return false;
		} // if()

		$articles.each( function( index, el ) {
			var $article = $( el ),
					$etr     = $article.siblings( '.post-header' ).find( '.etr' ),
					etr      = $article.readingtime()
			;

			// Make sure the etr element exists.
			if ( $etr.length === 0 ) {
				$etr = $article.siblings( '.etr' );
				if ( $etr.length === 0 ) {
					return;
				} // if()
			} // if()

			// Get the message to append after the time.
			var msg = $etr.data( 'msg' );
			msg = ( typeof msg === 'undefined' ) ? '' : msg;

			// Add the estimate time to read text.
			var etrText = etr + ' ' + msg;
			$etr.text( etrText.trim() );
		} );

		return false;
	}; // _init.jqueryReadingTime()

	// Initialize All The Things!!!!
	_init.jqueryAge();
	_init.jqueryReadingTime();
}( jQuery ) );
