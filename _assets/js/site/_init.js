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

	// Initialize All The Things!!!!
	_init.jqueryAge();
}( jQuery ) );
