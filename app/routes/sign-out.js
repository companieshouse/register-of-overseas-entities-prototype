module.exports = function (router) {


  router.get( '/register/sign-out', function ( req, res ) {
		var signOut = req.query.signOut;
		if ( signOut == "yes" ) {
			res.redirect( "/register/signed-out" );
		} else {
			res.render( 'javascript:window.history.back()' );
		}
	} );
