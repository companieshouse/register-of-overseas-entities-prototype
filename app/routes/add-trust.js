module.exports = function (router) {


  router.get( '/register/trusts/add-trust', function ( req, res ) {
		var dispChanged = req.query.dispChanged;
		if ( dispChanged == "yes" ) {
			res.redirect( "/register/trusts/trust-details" );
		} else {
			res.render( 'register/trusts/add-trust' );
		}
	} );

}


