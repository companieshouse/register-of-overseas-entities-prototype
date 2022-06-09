module.exports = function (router) {


  router.get( '/identity/sign-in', function ( req, res ) {
		var identityRelevant = req.query.identityRelevant;
		if ( identityRelevant == "no" ) {
			res.redirect( "/identity/not-relevant-person" );
		} else {
			res.render( 'identity/sign-in' );
		}
	} );

}
