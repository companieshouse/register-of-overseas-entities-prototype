module.exports = function (router) {


  router.get( '/register/secure-register-filter', function ( req, res ) {
		var soldLand = req.query.soldLand;
		if ( soldLand == "yes" "yes-some" ) {
			res.redirect( "/register/cannot-use" );
		} else {
			res.render( 'register/secure-register-filter' );
		}
	} );

}
