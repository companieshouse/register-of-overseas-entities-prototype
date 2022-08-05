module.exports = function (router) {


  router.get( '/register/starting-new', function ( req, res ) {
		var startingNew = req.query.startingNew;
		if ( startingNew == "no" ) {
			res.redirect( "/register/sold-land-filter" );
		} else {
			res.render( 'register/who-is-making-filing' );
		}
	} );

}
