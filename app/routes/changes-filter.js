module.exports = function (router) {


  router.get( '/register/disposals/declaration', function ( req, res ) {
		var dispChanged = req.query.dispChanged;
		if ( dispChanged == "yes" ) {
			res.redirect( "/register/disposals/disposed-land-info" );
		} else {
			res.render( 'register/disposals/declaration' );
		}
	} );

}
