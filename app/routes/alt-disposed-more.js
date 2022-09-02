module.exports = function (router) {


  router.get( '/register/disposals/declaration', function ( req, res ) {
		var disposalsMore = req.query.disposalsMore;
		if ( disposalsMore == "yes" ) {
			res.redirect( "/register/disposals/alt-disposed-land" );
		} else {
			res.render( 'register/disposals/declaration' );
		}
	} );

}
