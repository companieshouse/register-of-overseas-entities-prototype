module.exports = function (router) {

  router.get( '/register/sign-out', function ( req, res ) {
		var signOut = req.query.signOut;
		if ( signOut == "yes" ) {
			// Set the "are we signed in?" variable (gSignedIn) to FALSE
			var gSignedIn = false;
			res.redirect( "/register/signed-out" );
		} else {
			res.render( "javascript:window.history.back()" );
		}
	})
}
