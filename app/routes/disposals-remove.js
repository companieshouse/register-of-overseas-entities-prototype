module.exports = function (router) {


  router.get( '/register/disposals/remove', function ( req, res ) {
		var signOut = req.query.signOut;
		if ( signOut == "yes" ) {
			res.redirect( "/register/disposals/added-so-far" );
		} else {
			res.render( "javascript:window.history.back()" );
		}
	} );
