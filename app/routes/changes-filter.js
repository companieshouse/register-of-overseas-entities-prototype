module.exports = function (router) {


  router.get( '/register/disposals/declaration', function ( req, res ) {
		var disposalsChanged = req.query.disposalsChanged;
		if ( disposalsChanged == "yes" ) {
			res.redirect( "/register/disposals/disposed-land-info" );
		} else {
			res.render( 'register/disposals/declaration' );
		}
	} );

}
