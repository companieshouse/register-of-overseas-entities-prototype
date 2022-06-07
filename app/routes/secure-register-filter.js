module.exports = function (router) {


  router.get( '/register/interrupt-card', function ( req, res ) {
		var secureRegister = req.query.secureRegister;
		if ( secureRegister == "yes" ) {
			res.redirect( "/register/use-paper" );
		} else {
			res.render( 'register/interrupt-card' );
		}
	} );

}
