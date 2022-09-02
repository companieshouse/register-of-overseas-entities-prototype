module.exports = function (router) {


  router.get( '/register/disposals/alt-disposed-more', function ( req, res ) {
		var altChanged = req.query.altChanged;
		if ( altChanged == "yes" ) {
			res.redirect( "/register/disposals/alt-disposed-select" );
		} else {
			res.render( 'register/disposals/alt-disposed-more' );
		}
	} );

}
