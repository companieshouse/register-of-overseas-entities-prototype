module.exports = function (router) {


  router.post( '/register/trusts/check-answers-trusts-alt', function ( req, res ) {
		var soldLand = req.query.soldLand;
		if ( soldLand == "no" ) {
			res.redirect( "/register/check-answers" );
		} else {
			res.render( 'register/disposals/disposed-land' );
		}
	} );

}
