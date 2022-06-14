module.exports = function (router) {


  router.get( '/register/sold-land-filter', function ( req, res ) {
		var startingNew = req.query.startingNew;
		if ( startingNew == "no" ) {
			res.redirect( "/register/starting-new" );
		} else {
			res.render( 'register/sold-land-filter' );
		}
	} );

}
